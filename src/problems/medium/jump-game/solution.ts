export function canJump(nums: number[]): boolean {
  let position = 0;

  while (nums[position] > 0) {
    if (position + nums[position] >= nums.length - 1) {
      return true;
    }

    let best_idx = position;
    for (let i = position; i <= position + nums[position]; i++) {
      if (best_idx + nums[best_idx] <= i + nums[i]) {
        best_idx = i;
      }
    }

    position = best_idx;
  }
  return position >= nums.length - 1;
}
