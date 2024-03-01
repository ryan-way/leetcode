import { bench, group, baseline } from "mitata";
import {
  intToRoman,
  intToRomanList,
  intToRomanTest,
  intToRomanString,
} from "../../../src/problems";

group("Integer To Roman", () => {
  baseline("standard test", () => intToRoman(1994));
  bench("string", () => intToRomanString(1994));
  bench("list", () => intToRomanList(1994));
  bench("test", () => intToRomanTest(1994));
});
