import { describe, expect, test } from "bun:test";
import { romanToInt } from "../../../src/problems";

describe("Roman to Integer", () => {
	test("III to be 3", () => {
		expect(romanToInt("III")).toBe(3);
	});

	test("LVIII to be 58", () => {
		expect(romanToInt("LVIII")).toBe(58);
	});

	test("MCMXCIV to be 1994", () => {
		expect(romanToInt("MCMXCIV")).toBe(1994);
	});
});
