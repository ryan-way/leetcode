export function romanToInt(s: string): number {
  let sum = 0;
  let previous = 0;
  for (let i = s.length - 1; i >= 0; i -= 1) {
    const value = letterToInteger(s[i]);
    if (value < previous) {
      sum -= value;
    } else {
      sum += value;
    }

    previous = value;
  }
  return sum;
}

function letterToInteger(c: string): number {
  switch (c) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
  }
  return 0;
}
