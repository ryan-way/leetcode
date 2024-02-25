import { describe, expect, test } from "bun:test";
import { longestCommonPrefix } from "../../../src/problems";

describe("Longest Common Prefix", () => {
  test("Should match first two", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
  });

  test("Should be empty", () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
  });
});
