import { Client as UqlClient, cacheExchange, fetchExchange } from "@urql/core";
import { Question, data } from "./api";
import { logger } from "./utils";
export class Client {
	private client: UqlClient;
	constructor() {
		this.client = new UqlClient({
			url: "https://leetcode.com/graphql/",
			exchanges: [cacheExchange, fetchExchange],
		});
	}

	async fetchQuestion(title: string): Promise<Question> {
		logger.info("Fetching Question...");
		const response = await this.client.query(data, { titleSlug: title });

		if (response.data?.question) {
			logger.info("Done!");
			return response.data.question;
		}

		const message = `Did not receive response for question: ${title}`;
		logger.fatal(response.error, message);
		throw new Error(message);
	}
}
