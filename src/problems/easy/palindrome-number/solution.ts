import { logger } from "../../../utils";

export function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  if (x < 10) return true;

  let last = 1;
  while (last <= x) last *= 10;
  last /= 10;
  let first = 1;

  while (first < last) {
    if (Math.floor(x / last) % 10 !== Math.floor(x / first) % 10) return false;
    first *= 10;
    last /= 10;
  }

  return true;
}
