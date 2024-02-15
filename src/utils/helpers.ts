import { ListNode } from "../types";

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
