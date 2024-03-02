import { describe, expect, test } from "bun:test";
import {
  intToRoman,
  intToRomanList,
  intToRomanString,
  intToRomanTest,
} from "../../../src/problems";

const cases = [
  { input: 3, expected: "III" },
  { input: 58, expected: "LVIII" },
  { input: 1994, expected: "MCMXCIV" },
  { input: 594, expected: "DXCIV" },
  { input: 1494, expected: "MCDXCIV" },
  { input: 44, expected: "XLIV" },
  { input: 339, expected: "CCCXXXIX" },
];

describe("intToRoman", () => {
  test.each(cases)("on %p should be %s", ({ input, expected }) => {
    expect(intToRoman(input)).toEqual(expected);
  });
});

describe("intToRoman", () => {
  test.each(cases)("on %p should be %s", ({ input, expected }) => {
    expect(intToRomanString(input)).toEqual(expected);
  });
});

describe("intToRoman", () => {
  test.each(cases)("on %p should be %s", ({ input, expected }) => {
    expect(intToRomanList(input)).toEqual(expected);
  });
});

describe("intToRoman", () => {
  test.each(cases)("on %p should be %s", ({ input, expected }) => {
    expect(intToRomanTest(input)).toEqual(expected);
  });
});
