import { describe, expect, test } from "bun:test";
import { canJump } from "../../../src/problems";

const cases = [
  { input: { nums: [2, 3, 1, 1, 4] }, expected: true },
  { input: { nums: [3, 2, 1, 0, 4] }, expected: false },
  { input: { nums: [0] }, expected: true },
  { input: { nums: [1, 0, 8, 0] }, expected: false },
];

describe("canJump", () => {
  test.each(cases)("on %s should be %b", ({ input, expected }) => {
    expect(canJump(input.nums)).toEqual(expected);
  });
});
