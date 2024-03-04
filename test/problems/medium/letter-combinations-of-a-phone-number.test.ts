import { describe, expect, test } from "bun:test";
import { letterCombinations } from "../../../src/problems";

const cases = [
  {
    input: { digits: "23" },
    expected: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"],
  },
  { input: { digits: "" }, expected: [] },
  { input: { digits: "2" }, expected: ["a", "b", "c"] },
];

describe("letterCombinations", () => {
  test.each(cases)("on %s should be %b", ({ input, expected }) => {
    expect(letterCombinations(input.digits)).toEqual(expected);
  });
});
