import { describe, expect, test } from "bun:test";
import { isPalindrome } from "../../../src/problems";

describe("Palindrome Number", () => {
	test("121", () => {
		expect(isPalindrome(121)).toBe(true);
	});

	test("-121", () => {
		expect(isPalindrome(-121)).toBe(false);
	});

	test("10", () => {
		expect(isPalindrome(10)).toBe(false);
	});
});
