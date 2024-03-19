export function generateParenthesis(n: number): string[] {
  return generateParenthesisDp(n);
}

export function generateParenthesisDfs(n: number): string[] {
  const result: string[] = [];
  _generateParenthesisDfs(result, ["("], n, 1, 0);
  return result;
}

function _generateParenthesisDfs(
  result: string[],
  curr: string[],
  n: number,
  opens: number,
  closes: number,
): void {
  if (opens === n && closes === opens) {
    result.push(curr.join(""));
    return;
  }
  if (opens < n) {
    curr.push("(");
    _generateParenthesisDfs(result, curr, n, opens + 1, closes);
    curr.pop();
  }
  if (closes < opens) {
    curr.push(")");
    _generateParenthesisDfs(result, curr, n, opens, closes + 1);
    curr.pop();
  }
}

export function generateParenthesisDp(n: number): string[] {
  let result = ["()"];

  for (let i = 1; i < n; i++) {
    result = Array.from(
      new Set(
        result.flatMap((value) => [`(${value})`, `()${value}`, `${value}()`]),
      ).values(),
    );
  }

  result.sort();
  return result;
}

export function generateParenthesisSwaps(n: number): string[] {
  const set: Set<string> = new Set();
  const curr: string[] = "()".repeat(n).split("");
  _generateParenthesisSwaps(set, curr);
  const result = Array.from(set.values());
  result.sort();
  return result;
}

function _generateParenthesisSwaps(set: Set<string>, curr: string[]): void {
  const _curr = curr.join("");
  if (set.has(_curr)) return;
  set.add(curr.join(""));
  for (let i = 1; i < curr.length - 1; i++) {
    if (curr[i] === ")" && curr[i + 1] === "(") {
      [curr[i], curr[i + 1]] = [curr[i + 1], curr[i]];
      _generateParenthesisSwaps(set, curr);
      [curr[i], curr[i + 1]] = [curr[i + 1], curr[i]];
    }
  }
}
