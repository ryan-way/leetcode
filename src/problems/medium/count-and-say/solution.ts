export function countAndSay(n: number): string {
  if (n === 1) return "1";

  let result = "";
  const value = countAndSay(n - 1);

  let say = value[0];
  let count = 0;

  for (const c of value) {
    if (c === say) {
      count += 1;
    } else {
      result += `${count}${say}`;
      say = c;
      count = 1;
    }
  }

  result += `${count}${say}`;

  return result;
}
