import { describe, expect, test } from "bun:test";
import { isValidBST } from "../../../src/problems";
import { arrayToTreeNode } from "../../../src/utils";

const cases = [
  { input: [2, 1, 3], expected: true },
  { input: [5, 1, 4, null, null, 3, 6], expected: false },
  { input: [2, 2, 2], expected: false },
];

describe("IsValidBST", () => {
  test.each(cases)("on %s should be %b", ({ input, expected }) => {
    expect(isValidBST(arrayToTreeNode(input))).toBe(expected);
  });
});
