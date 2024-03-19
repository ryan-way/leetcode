import { describe, expect, test } from "bun:test";
import {
  generateParenthesis,
  generateParenthesisDfs,
  generateParenthesisDp,
  generateParenthesisSwaps,
} from "../../../src/problems";

const cases = [
  {
    input: { n: 3 },
    expected: ["((()))", "(()())", "(())()", "()(())", "()()()"],
  },
  { input: { n: 1 }, expected: ["()"] },
  { input: { n: 2 }, expected: ["()()", "(())"] },
];

describe("generateParenthesis", () => {
  test.each(cases)("on %s should be %b", ({ input, expected }) => {
    expect(generateParenthesis(input.n)).toEqualWithoutOrder(expected);
  });
});

describe("generateParenthesisDfs", () => {
  test.each(cases)("on %s should be %b", ({ input, expected }) => {
    expect(generateParenthesisDfs(input.n)).toEqualWithoutOrder(expected);
  });
});

describe("generateParenthesisDp", () => {
  test.each(cases)("on %s should be %b", ({ input, expected }) => {
    expect(generateParenthesisDp(input.n)).toEqualWithoutOrder(expected);
  });
});

describe("generateParenthesisSwaps", () => {
  test.each(cases)("on %s should be %b", ({ input, expected }) => {
    expect(generateParenthesisSwaps(input.n)).toEqualWithoutOrder(expected);
  });
});

describe("Cross reference", () => {
  test("generateParenthesisSwaps should match generateParenthesisDfs", () => {
    for (let i = 1; i <= 8; i++) {
      expect(generateParenthesisSwaps(i)).toEqual(generateParenthesisDfs(i));
    }
  });
  test.skip("generateParenthesisDp should match generateParenthesisDfs", () => {
    for (let i = 1; i <= 8; i++) {
      expect(generateParenthesisDp(i)).toEqual(generateParenthesisDfs(i));
    }
  });
});
