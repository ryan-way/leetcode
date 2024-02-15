export function twoSum(nums: number[], target: number): number[] {
	const map = new Map();

	for (const [index, value] of nums.entries()) {
		if (map.has(target - value)) {
			return [map.get(target - value), index];
		}

		map.set(value, index);
	}

	throw new Error("Guarenteed one solution");
}
