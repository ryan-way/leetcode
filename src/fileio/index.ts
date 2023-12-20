import { mkdir } from "fs/promises";
import { join } from "path";
import { Question } from "../api";
import { writeFile } from "fs/promises";
import { NodeHtmlMarkdown } from "node-html-markdown";
import { logger } from "../utils";

const BEGIN = `
import { describe, expect, test } from "bun:test";

describe("$TITLE", () => {
`;
const TEST = `
	test("$TESTCASE", () => {
		expect($TESTCASE).toBe($EXPECTED);
	});
`;

const END = `
});
`;
const FilePaths: Record<string, string> = {
	Description: "description.md",
	Solution: "solution.ts",
};

export class FileSystemCreater {
	constructor(
		private problemRoot: string,
		private testRoot: string,
		private question: Question,
	) {}

	async setup() {
		logger.info("Creating file system..");
		await this.setupProblem();
		await this.setupTest();
		logger.info("Done!");
	}

	async setupProblem() {
		const path = join(
			this.problemRoot,
			this.question.difficulty.toLocaleLowerCase(),
			this.question.titleSlug,
		);
		await mkdir(path, { recursive: true });
		const markdown = NodeHtmlMarkdown.translate(this.question.content);
		await writeFile(join(path, FilePaths.Description), markdown);
		const typescript = this.question.codeSnippets.find(
			(snippet) => snippet.langSlug === "typescript",
		);
		if (!typescript) {
			const message = `Could not find typescript snippet for ${this.question.titleSlug}`;
			logger.fatal(this.question.codeSnippets, message);
			throw new Error(message);
		}
		await writeFile(join(path, FilePaths.Solution), typescript.code);
	}

	async setupTest() {
		const path = join(
			this.testRoot,
			this.question.difficulty.toLocaleLowerCase(),
		);
		await mkdir(path, { recursive: true });
		const filePath = join(path, `${this.question.titleSlug}.test.ts`);
		await writeFile(filePath, this.getTestFileContents());
	}

	getTestFileContents(): string {
		return (
			BEGIN.replace("$TITLE", this.question.title) +
			this.question.exampleTestcaseList
				.map((testCase) => {
					const [test, expected] = testCase.split("\n", 2);
					return TEST.replaceAll("$TESTCASE", test).replaceAll(
						"$EXPECTED",
						expected,
					);
				})
				.join("") +
			END
		);
	}
}
