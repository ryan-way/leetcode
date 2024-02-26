import { describe, expect, test } from "bun:test";
import { levelOrder } from "../../../src/problems";
import { arrayToTreeNode } from "../../../src/utils";

const cases = [
  { input: [3, 9, 20, null, null, 15, 7], expected: [[3], [9, 20], [15, 7]] },
  { input: [1], expected: [[1]] },
  { input: [], expected: [] },
];

describe("levelOrder", () => {
  test.each(cases)("on %s should be %b", ({ input, expected }) => {
    expect(levelOrder(arrayToTreeNode(input))).toEqual(expected);
  });
});
