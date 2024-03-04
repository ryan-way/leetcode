const map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

export function letterCombinations(digits: string): string[] {
  if (digits.length === 0) return [];
  const _digits = digits.split("").map((val) => +val);
  const prefix: string[] = [];
  const start = 0;
  const result: string[] = [];
  _letterCombinations(_digits, prefix, start, result);
  return result;
}

function _letterCombinations(
  digits: number[],
  prefix: string[],
  start: number,
  result: string[],
): void {
  if (start === digits.length) {
    result.push(prefix.join(""));
    return;
  }

  for (const letter of map[digits[start]]) {
    prefix.push(letter);
    _letterCombinations(digits, prefix, start + 1, result);
    prefix.pop();
  }
}
