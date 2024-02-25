export function isValid(s: string): boolean {
  const check = [];
  for (const c of s) {
    switch (c) {
      case "(":
      case "{":
      case "[":
        check.push(c);
        break;
      case ")":
        if (check.pop() !== "(") {
          return false;
        }
        break;
      case "}":
        if (check.pop() !== "{") {
          return false;
        }
        break;
      case "]":
        if (check.pop() !== "[") {
          return false;
        }
        break;
    }
  }
  return check.length === 0;
}
