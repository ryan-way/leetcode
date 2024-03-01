import { ListNode } from "../../../types";

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  return _addTwoNumbers(l1, l2, 0);
}

export function _addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
  carry: number,
): ListNode | null {
  if (l1 === null && l2 === null) {
    return carry === 0 ? null : new ListNode(carry);
  }

  let value = carry;

  if (l1 !== null) value += l1.val;
  if (l2 !== null) value += l2.val;

  return new ListNode(
    value % 10,
    _addTwoNumbers(l1?.next ?? null, l2?.next ?? null, Math.floor(value / 10)),
  );
}
