import { bench, group, baseline } from "mitata";
import { longestCommonPrefix } from "../../../src/problems";
import { repeatArray } from "../../../src/utils/helpers";

group("Longest Common Prefix", () => {
	baseline("standard test", () =>
		longestCommonPrefix(["flower", "flow", "flight"]),
	);
	bench("performance.now()", () =>
		longestCommonPrefix(repeatArray(["flower", "flow", "flight"], 10)),
	);
});
