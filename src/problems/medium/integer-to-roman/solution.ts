export function intToRoman(num: number): string {
  return intToRomanTest(num);
}

export function intToRomanString(num: number): string {
  const map = [
    { value: 1000, label: "M" },
    { value: 900, label: "CM" },
    { value: 500, label: "D" },
    { value: 400, label: "CD" },
    { value: 100, label: "C" },
    { value: 90, label: "XC" },
    { value: 50, label: "L" },
    { value: 40, label: "XL" },
    { value: 10, label: "X" },
    { value: 9, label: "IX" },
    { value: 5, label: "V" },
    { value: 4, label: "IV" },
    { value: 1, label: "I" },
  ];
  let result = "";
  let temp = num;

  for (const convert of map) {
    while (temp >= convert.value) {
      temp -= convert.value;
      result += convert.label;
    }
  }
  return result;
}

export function intToRomanList(num: number): string {
  const map = [
    { value: 1000, label: "M" },
    { value: 900, label: "CM" },
    { value: 500, label: "D" },
    { value: 400, label: "CD" },
    { value: 100, label: "C" },
    { value: 90, label: "XC" },
    { value: 50, label: "L" },
    { value: 40, label: "XL" },
    { value: 10, label: "X" },
    { value: 9, label: "IX" },
    { value: 5, label: "V" },
    { value: 4, label: "IV" },
    { value: 1, label: "I" },
  ];
  const result = [""];
  let temp = num;

  for (const convert of map) {
    while (temp >= convert.value) {
      temp -= convert.value;
      result.push(convert.label);
    }
  }
  return result.join("");
}

export function convert(
  result: string[],
  convert: number,
  value: number,
  label: string,
): number {
  let temp = convert;
  while (temp >= value) {
    temp -= value;
    result.push(label);
  }
  return temp;
}

export function intToRomanTest(num: number): string {
  const result = [""];
  let temp = num;

  while (temp >= 1000) {
    temp -= 1000;
    result.push("M");
  }
  while (temp >= 900) {
    temp -= 900;
    result.push("CM");
  }
  while (temp >= 500) {
    temp -= 500;
    result.push("D");
  }
  while (temp >= 400) {
    temp -= 400;
    result.push("CD");
  }
  while (temp >= 100) {
    temp -= 100;
    result.push("C");
  }
  while (temp >= 90) {
    temp -= 90;
    result.push("XC");
  }
  while (temp >= 50) {
    temp -= 50;
    result.push("L");
  }
  while (temp >= 40) {
    temp -= 40;
    result.push("XL");
  }
  while (temp >= 10) {
    temp -= 10;
    result.push("X");
  }
  while (temp >= 9) {
    temp -= 9;
    result.push("IX");
  }
  while (temp >= 5) {
    temp -= 5;
    result.push("V");
  }
  while (temp >= 4) {
    temp -= 4;
    result.push("IV");
  }
  while (temp >= 1) {
    temp -= 1;
    result.push("I");
  }
  return result.join("");
}
