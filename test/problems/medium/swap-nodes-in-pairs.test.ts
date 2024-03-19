import { describe, expect, test } from "bun:test";
import { swapPairs } from "../../../src/problems";
import { arrayToListNode, listNodeToArray } from "../../../src/utils";

const cases = [
  { input: { head: [1, 2, 3, 4] }, expected: [2, 1, 4, 3] },
  { input: { head: [] }, expected: [] },
  { input: { head: [1] }, expected: [1] },
];

describe("swapPairs", () => {
  test.each(cases)("on %s should be %b", ({ input, expected }) => {
    expect(swapPairs(arrayToListNode(input.head))).toEqual(
      arrayToListNode(expected),
    );
  });
});
