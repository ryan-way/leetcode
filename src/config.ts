import { parse } from "ts-command-line-args";

export interface Config {
  title: string;
}

export const config = parse<Config>({
  title: String,
});
