import { describe, expect, test } from "bun:test";
import { longestPalindrome } from "../../../src/problems";

const cases = [
  ["babad", "bab"],
  ["cbbd", "bb"],
  ["a", "a"],
];

describe("Longest Palindromic Substring", () => {
  test.each(cases)(
    "longest palidrome in %s should be %s",
    (input, expected) => {
      expect(longestPalindrome(input)).toBe(expected);
    },
  );
});
