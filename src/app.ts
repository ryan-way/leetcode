import { join } from "path";
import { Client } from "./client";
import type { Config } from "./config";
import { FileSystemCreater } from "./fileio";
import { logger } from "./utils";
export class App {
  constructor(private config: Config, private client: Client) {}

  public async setup() {
    const question = await this.client.fetchQuestion(this.config.title);
    const fileSys = new FileSystemCreater(
      join(import.meta.dir, "problems/"),
      join(import.meta.dir, "../test/problems/"),
      question,
    );
    await fileSys.setup();
  }
}
