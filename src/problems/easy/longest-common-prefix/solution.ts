export function longestCommonPrefix(strs: string[]): string {
  let length = strs[0].length;
  for (const str of strs) {
    while (!str.startsWith(strs[0].substring(0, length))) {
      length -= 1;
    }
  }
  return strs[0].substring(0, length);
}
