import figlet from "figlet";
import { App } from "./app";
import { Client } from "./client";
import { config } from "./config";

function printTitle() {
	const message = figlet.textSync("Welcome to Leetcode!");
	const length = message.indexOf("\n");
	console.log("#".repeat(length));
	console.log(message);
	console.log("#".repeat(length));
}

async function main() {
	printTitle();
	const client = new Client();
	const app = new App(config, client);
	app.setup();
}

main();
