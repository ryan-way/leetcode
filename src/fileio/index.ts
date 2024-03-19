import { join } from "path";
import { mkdir } from "fs/promises";
import { appendFile, writeFile } from "fs/promises";
import { NodeHtmlMarkdown } from "node-html-markdown";
import { Param, Question, Type } from "../api";
import { logger } from "../utils";

const BEGIN = `
import { describe, expect, test } from "bun:test";
import { $FUNCTION } from "../../../src/problems";

const cases = [`;
const TEST = `
	{ input: { $INPUT }, expected: $EXPECTED },`;

const END = `
];

describe("$FUNCTION", () => {
  test.each(cases)("on %s should be %b", ({ input, expected }) => {
    expect($FUNCTION($INPUTS)).toEqual(expected);
  });
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
    await this.appendIndex();
    logger.info("Done!");
  }
  async appendIndex() {
    const ex = `export * from "./${this.question.difficulty.toLocaleLowerCase()}/${
      this.question.titleSlug
    }/solution";\n`;
    const path = join(this.problemRoot, "index.ts");

    await appendFile(path, ex);
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
    await writeFile(
      join(path, FilePaths.Solution),
      `export ${typescript.code}`,
    );
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
      BEGIN.replaceAll("$FUNCTION", this.question.metaData.name) +
      this.question.exampleTestcaseList
        .map((testCase) => {
          const inputs = testCase
            .split("\n")
            .map((input, idx) => {
              const param = this.question.metaData.params[idx];
              return this.serialize(param, input);
            })
            .join(", ");
          return TEST.replaceAll("$INPUT", inputs).replaceAll(
            "$EXPECTED",
            this.default(this.question.metaData.return.type),
          );
        })
        .join("") +
      END.replaceAll("$FUNCTION", this.question.metaData.name).replaceAll(
        "$INPUTS",
        this.question.metaData.params
          .map((param) => `input.${param.name}`)
          .join(", "),
      )
    );
  }
  serialize(param: Param, input: string): string {
    return `${param.name}: ${input}`;
  }

  default(type: Type): string {
    if (type.includes("list")) {
      return "[]";
    }

    if (type.includes("[]")) {
      return "[]";
    }

    if (type === "string") {
      return "";
    }

    if (type === "boolean") {
      return "false";
    }

    if (type === "integer") {
      return "0";
    }

    if (type === "ListNode") {
      return "null";
    }

    throw new Error(`No default value defined for type: ${type}`);
  }
}
