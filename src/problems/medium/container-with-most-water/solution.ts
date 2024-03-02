export function maxArea(height: number[]): number {
  let first = 0;
  let last = height.length - 1;
  let best = 0;

  while (first < last) {
    best = Math.max(
      best,
      Math.min(height[first], height[last]) * (last - first),
    );
    if (height[first] < height[last]) {
      first++;
    } else {
      last--;
    }
  }
  return best;
}
