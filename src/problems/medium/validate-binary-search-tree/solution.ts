import { TreeNode } from "../../../types";

export function isValidBST(root: TreeNode | null): boolean {
  const inorder: number[] = [];
  inorderTraversal(root, inorder);

  for (let i = 1; i < inorder.length; i++) {
    if (inorder[i] <= inorder[i - 1]) return false;
  }

  return true;
}

function inorderTraversal(root: TreeNode | null, output: number[]) {
  if (root === null) return;
  inorderTraversal(root.left, output);
  output.push(root.val);
  inorderTraversal(root.right, output);
}
