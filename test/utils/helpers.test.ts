import { describe, expect, test } from "bun:test";
import { ListNode, TreeNode } from "../../src/types";
import {
  arrayToListNode,
  arrayToTreeNode,
  listNodeToArray,
  repeatArray,
  treeNodeToArray,
} from "../../src/utils";

describe("When arrayToListNode is called", () => {
  test("with an empty array, return null", () => {
    expect(arrayToListNode([])).toBeNull();
  });
  test("with a single element array, return listNode with that elements", () => {
    const expected = new ListNode(1);
    const result = arrayToListNode([1]);
    expect(result).toEqual(expected);
  });
  test("with a multiple elements, return listNode with populated next", () => {
    const expected = new ListNode(1, new ListNode(2));
    const result = arrayToListNode([1, 2]);
    expect(result).toEqual(expected);
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

describe("When arrayToTreeNode is called", () => {
  test("with an empty array, return null", () => {
    expect(arrayToTreeNode([])).toBeNull();
  });
  test("with a single element array, return treeNode with that elements", () => {
    const expected = new TreeNode(1);
    const result = arrayToTreeNode([1]);
    expect(result).toEqual(expected);
  });

  test("with a few elements, return treeNode with populated left and right", () => {
    const expected = new TreeNode(2, new TreeNode(1), new TreeNode(3));
    const result = arrayToTreeNode([2, 1, 3]);
    expect(result).toEqual(expected);
  });

  test("with a nested elements, return treeNode with populated left and right", () => {
    const expected = new TreeNode(
      5,
      new TreeNode(1),
      new TreeNode(4, new TreeNode(3), new TreeNode(6)),
    );
    const result = arrayToTreeNode([5, 1, 4, null, null, 3, 6]);
    expect(result).toEqual(expected);
  });
});

describe("When treeNodeToArray is called", () => {
  test("with null, return empty array", () => {
    expect(treeNodeToArray(null)).toEqual([]);
  });
  test("with a single root TreeNode, returns array with a single value", () => {
    const input = new TreeNode(1);
    expect(treeNodeToArray(input)).toEqual([1]);
  });
  test("with a simple TreeNode, returns array with values", () => {
    const input = new TreeNode(2, new TreeNode(1), new TreeNode(3));

    expect(treeNodeToArray(input)).toEqual([2, 1, 3]);
  });
  test("with a nested TreeNodes, returns array with values", () => {
    const input = new TreeNode(
      5,
      new TreeNode(1),
      new TreeNode(4, new TreeNode(3), new TreeNode(6)),
    );
    expect(treeNodeToArray(input)).toEqual([5, 1, 4, null, null, 3, 6]);
  });
});
