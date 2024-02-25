import { describe, expect, test } from "bun:test";
import { ListNode } from "../../src/types";
import { arrayToListNode, listNodeToArray, repeatArray } from "../../src/utils";

describe("When arrayToListNode is called", () => {
	test("with an empty array, return null", () => {
		expect(arrayToListNode([])).toBeNull();
	});
	test("with a single element array, return listNode with that elements", () => {
		const result = arrayToListNode([1]);
		expect(result).not.toBeNull();
		expect(result?.val).toBe(1);
		expect(result?.next).toBeNull();
	});
	test("with a multiple elements, return listNode with populated next", () => {
		const result = arrayToListNode([1, 2]);
		expect(result).not.toBeNull();
		expect(result?.val).toBe(1);
		expect(result?.next).not.toBeNull();
		expect(result?.next?.val).toBe(2);
		expect(result?.next?.next).toBeNull();
	});
});

describe("When listNodeToArray is called", () => {
	test("with null, return empty array", () => {
		expect(listNodeToArray(null)).toEqual([]);
	});
	test("with a single listnode, returns array with a single value", () => {
		const input = new ListNode(1);
		expect(listNodeToArray(input)).toEqual([1]);
	});
	test("with multiple listnodes, returns array with node values", () => {
		const next = new ListNode(2);
		const input = new ListNode(1, next);
		expect(listNodeToArray(input)).toEqual([1, 2]);
	});
});

describe("When repeatArray is called", () => {
	test("with an empty array, return empty array", () => {
		expect(repeatArray([], 2)).toEqual([]);
	});
	test("with a single element array, returns array with a two elements", () => {
		expect(repeatArray([1], 2)).toEqual([1, 1]);
	});
	test("with multiple elements, returns array with repeated elements", () => {
		expect(repeatArray([1, 2, 3], 2)).toEqual([1, 2, 3, 1, 2, 3]);
		expect(repeatArray([1, 2, 3], 3)).toEqual([1, 2, 3, 1, 2, 3, 1, 2, 3]);
	});
});
