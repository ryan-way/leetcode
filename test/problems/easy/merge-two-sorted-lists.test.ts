import { describe, expect, test } from "bun:test";
import { mergeTwoLists } from "../../../src/problems";
import { arrayToListNode, listNodeToArray } from "../../../src/utils/helpers";

describe("Merge Two Sorted Lists", () => {
	test("list1 = [1,2,4], list2 = [1,3,4]", () => {
		expect(
			listNodeToArray(
				mergeTwoLists(arrayToListNode([1, 2, 4]), arrayToListNode([1, 3, 4])),
			),
		).toEqual([1, 1, 2, 3, 4, 4]);
	});

	test("list1 = [], list2 = []", () => {
		expect(
			listNodeToArray(mergeTwoLists(arrayToListNode([]), arrayToListNode([]))),
		).toEqual([]);
	});

	test("list1 = [], list2 = [0]", () => {
		expect(
			listNodeToArray(mergeTwoLists(arrayToListNode([]), arrayToListNode([0]))),
		).toEqual([0]);
	});
});
