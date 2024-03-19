import { bench, group, baseline } from "mitata";
import {
  generateParenthesisDfs,
  generateParenthesisDp,
  generateParenthesisSwaps,
} from "../../../src/problems";
const n = 8;
group("Generate Parentheses", () => {
  baseline("standard test", () => generateParenthesisDfs(n));
  bench("dynamic programming", () => generateParenthesisDp(n));
  bench("swaps", () => generateParenthesisSwaps(n));
});
