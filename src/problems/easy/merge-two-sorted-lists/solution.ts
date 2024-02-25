// Definition for singly-linked list.

import { ListNode } from "../../../types";

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  let head1 = list1;
  let head2 = list2;
  let headResult: ListNode | null = null;
  let tailResult: ListNode | null = null;
  while (head1 !== null && head2 !== null) {
    let value = 0;
    if (head1.val < head2.val) {
      value = head1.val;
      head1 = head1.next;
    } else {
      value = head2.val;
      head2 = head2.next;
    }

    if (headResult === null) {
      headResult = new ListNode(value);
      tailResult = headResult;
    } else if (tailResult !== null) {
      tailResult.next = new ListNode(value);
      tailResult = tailResult?.next;
    }
  }

  const remaining = head1 !== null ? head1 : head2;
  if (tailResult !== null) {
    tailResult.next = remaining;
  } else {
    headResult = remaining;
  }

  return headResult;
}
