import figlet from "figlet";
import { logger } from "./utils";

function printTitle() {
	const message = figlet.textSync("Welcome to Leetcode!");
	const length = message.indexOf("\n");
	console.log("#".repeat(length));
	console.log(message);
	console.log("#".repeat(length));
}

function testPino() {
	logger.fatal("Something");
	logger.info("info");
	logger.warn("warn");
	logger.error("error");
}

function main() {
	printTitle();
	testPino();
}

main();
