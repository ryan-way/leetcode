import { describe, expect, test } from "bun:test";
import { combinationSum } from "../../../src/problems";

const cases = [
  {
    input: { candidates: [2, 3, 6, 7], target: 7 },
    expected: [[2, 2, 3], [7]],
  },
  {
    input: { candidates: [2, 3, 5], target: 8 },
    expected: [
      [2, 2, 2, 2],
      [2, 3, 3],
      [3, 5],
    ],
  },
  { input: { candidates: [2], target: 1 }, expected: [] },
];

describe("combinationSum", () => {
  test.each(cases)("on %s should be %b", ({ input, expected }) => {
    const received = combinationSum(input.candidates, input.target);
    expect(received.length).toBe(expected.length);
    for (const row of received) {
      row.sort();
    }
    received.sort();

    expect(JSON.stringify(received)).toBe(JSON.stringify(expected));
  });
});
