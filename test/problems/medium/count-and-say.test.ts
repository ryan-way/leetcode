import { describe, expect, test } from "bun:test";
import { countAndSay } from "../../../src/problems";

const cases = [
  { input: { n: 1 }, expected: "1" },
  { input: { n: 4 }, expected: "1211" },
  { input: { n: 5 }, expected: "111221" },
  { input: { n: 10 }, expected: "13211311123113112211" },
];

describe("countAndSay", () => {
  test.each(cases)("on %s should be %b", ({ input, expected }) => {
    expect(countAndSay(input.n)).toEqual(expected);
  });
});
