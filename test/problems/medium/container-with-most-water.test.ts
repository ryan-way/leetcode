import { describe, expect, test } from "bun:test";
import { maxArea } from "../../../src/problems";

const cases = [
  { input: { height: [1, 8, 6, 2, 5, 4, 8, 3, 7] }, expected: 49 },
  { input: { height: [1, 1] }, expected: 1 },
];

describe("maxArea", () => {
  test.each(cases)("on %s should be %b", ({ input, expected }) => {
    expect(maxArea(input.height)).toEqual(expected);
  });
});
