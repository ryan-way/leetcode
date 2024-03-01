import { describe, expect, test } from "bun:test";
import { addTwoNumbers } from "../../../src/problems";
import { arrayToListNode } from "../../../src/utils";

const cases = [
  {
    input: {
      l1: arrayToListNode([2, 4, 3]),
      l2: arrayToListNode([5, 6, 4]),
    },
    expected: arrayToListNode([7, 0, 8]),
  },
  {
    input: {
      l1: arrayToListNode([0]),
      l2: arrayToListNode([0]),
    },
    expected: arrayToListNode([0]),
  },
  {
    input: {
      l1: arrayToListNode([9, 9, 9, 9, 9, 9, 9]),
      l2: arrayToListNode([9, 9, 9, 9]),
    },
    expected: arrayToListNode([8, 9, 9, 9, 0, 0, 0, 1]),
  },
];

describe("addTwoNumbers", () => {
  test.each(cases)("on %s should be %b", ({ input, expected }) => {
    expect(addTwoNumbers(input.l1, input.l2)).toEqual(expected);
  });
});
