import { describe, expect, test } from "bun:test";
import { isValid } from "../../../src/problems";

describe("Valid Parentheses", () => {
  test("()", () => {
    expect(isValid("()")).toBe(true);
  });

  test("()[]{}", () => {
    expect(isValid("()[]{}")).toBe(true);
  });

  test("(]", () => {
    expect(isValid("(]")).toBe(false);
  });

  test("(", () => {
    expect(isValid("(")).toBe(false);
  });

  test("]", () => {
    expect(isValid("]")).toBe(false);
  });
});
