export function threeSum(nums: number[]): number[][] {
  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const curr = nums[i] + nums[j] + nums[k];
      if (curr === 0) {
        result.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (nums[j] === nums[j - 1] && j < k) {
          j++;
        }
        while (nums[k] === nums[k + 1] && j < k) {
          k--;
        }
      } else if (curr > 0) {
        k--;
      } else {
        j++;
      }
    }
  }
  return result;
}
