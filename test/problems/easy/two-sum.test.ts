import { twoSum } from "../../../src/problems";
import { describe, expect, test } from "bun:test";
import { logger } from "../../../src/utils";

describe("Two Sum", () => {
	test("Test", () => {
		const map: Record<number, number> = {};
		map[3] = 4;

		expect(3 in map).toBeTrue();
	});
	test("[2,7,11,15], 9", () => {
		expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
	});

	test("[3,2,4], 6", () => {
		expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
	});

	test("[3,3], 6", () => {
		expect(twoSum([3, 3], 6)).toEqual([0, 1]);
	});
});
