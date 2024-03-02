import { describe, expect, test } from "bun:test";
import { threeSum } from "../../../src/problems";

const cases = [
  {
    input: { nums: [-1, 0, 1, 2, -1, -4] },
    expected: [
      [-1, -1, 2],
      [-1, 0, 1],
    ],
  },
  { input: { nums: [0, 1, 1] }, expected: [] },
  { input: { nums: [0, 0, 0] }, expected: [[0, 0, 0]] },
  { input: { nums: [0, 0, 0, 0] }, expected: [[0, 0, 0]] },
  {
    input: { nums: [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4] },
    expected: [
      [-4, 0, 4],
      [-4, 1, 3],
      [-3, -1, 4],
      [-3, 0, 3],
      [-3, 1, 2],
      [-2, -1, 3],
      [-2, 0, 2],
      [-1, -1, 2],
      [-1, 0, 1],
    ],
  },
];

describe("threeSum", () => {
  test.each(cases)("on %s should be %b", ({ input, expected }) => {
    expect(threeSum(input.nums)).toEqualWithoutOrder(expected);
  });
});
