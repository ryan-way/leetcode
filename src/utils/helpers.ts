import { ListNode, TreeNode } from "../types";

export function arrayToListNode(input: number[]): ListNode | null {
  let head = null;
  for (const value of input.reverse()) {
    if (head === null) {
      head = new ListNode(value);
    } else {
      head = new ListNode(value, head);
    }
  }
  return head;
}

export function listNodeToArray(input: ListNode | null): number[] {
  const res = [];
  let head = input;
  while (head !== null) {
    res.push(head.val);
    head = head.next;
  }
  return res;
}

export function repeatArray<T>(array: T[], n: number) {
  return Array(n).fill(array).flat();
}

export function arrayToTreeNode(
  input: (number | null)[],
  start = 0,
): TreeNode | null {
  if (input.length <= start || input[start] === null) {
    return null;
  }
  const root = new TreeNode(input[start] ?? 0);
  root.left = arrayToTreeNode(input, start * 2 + 1);
  root.right = arrayToTreeNode(input, start * 2 + 2);
  return root;
}

// does not work for all cases, but works for examples from problems
export function treeNodeToArray(input: TreeNode | null): (number | null)[] {
  const result = [];
  if (input === null) {
    return [];
  }
  result.push(input.val);

  result.push(input.left?.val ?? null);
  result.push(input.right?.val ?? null);
  _treeNodeToArray(input.left, result);
  _treeNodeToArray(input.right, result);

  return result.slice(0, result.findLastIndex((val) => val !== null) + 1);
}

function _treeNodeToArray(
  input: TreeNode | null,
  result: (number | null)[],
): void {
  if (input === null) {
    return;
  }
  result.push(input.left?.val ?? null);
  result.push(input.right?.val ?? null);
  _treeNodeToArray(input.left, result);
  _treeNodeToArray(input.right, result);
}
