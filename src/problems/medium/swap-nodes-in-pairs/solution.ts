import { ListNode } from "../../../types";

export function swapPairs(head: ListNode | null): ListNode | null {
  const start = new ListNode(0, head);
  let prev = start;

  while (prev.next?.next) {
    const first = prev.next;
    const second = prev.next.next;

    prev.next = second;
    first.next = second.next;
    second.next = first;

    prev = first;
  }
  return start.next;
}
