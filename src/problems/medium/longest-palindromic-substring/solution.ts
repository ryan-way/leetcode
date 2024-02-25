export function longestPalindrome(s: string): string {
  let start = 0;
  let end = 0;
  const length = () => end - start;
  for (let i = 0; i < s.length; i++) {
    for (
      let j = i, k = i;
      j >= 0 && k < s.length && s[j] === s[k];
      j-- && k++
    ) {
      if (k - j > length()) {
        end = k;
        start = j;
      }
    }
    for (
      let j = i, k = i + 1;
      j >= 0 && k < s.length && s[j] === s[k];
      j-- && k++
    ) {
      if (k - j + 1 > length()) {
        end = k;
        start = j;
      }
    }
  }
  return s.substring(start, end + 1);
}
