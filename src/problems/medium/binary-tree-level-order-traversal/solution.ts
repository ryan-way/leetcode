import { TreeNode } from "../../../types";

export function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];
  _levelOrder(root, 0, result);
  return result;
}

function _levelOrder(
  root: TreeNode | null,
  depth: number,
  result: number[][],
): void {
  if (root === null) return;
  while (result.length <= depth) {
    result.push([]);
  }

  result[depth].push(root.val);
  _levelOrder(root.left, depth + 1, result);
  _levelOrder(root.right, depth + 1, result);
}
