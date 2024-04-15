export function combinationSum(
  candidates: number[],
  target: number,
): number[][] {
  const result: number[][] = [];
  const sortedCandidates = candidates.sort().reverse();
  combinationSumRecurse(sortedCandidates, target, [], 0, 0, result);
  return result;
}

function combinationSumRecurse(
  candidates: number[],
  target: number,
  curr: number[],
  start: number,
  currSum: number,
  result: number[][],
): void {
  if (currSum === target) {
    result.push([...curr]);
    return;
  }
  if (currSum > target) {
    return;
  }

  for (let i = start; i < candidates.length; i++) {
    if (i !== start && candidates[i] === candidates[i - 1]) {
      continue;
    }

    curr.push(candidates[i]);
    combinationSumRecurse(
      candidates,
      target,
      curr,
      i,
      currSum + candidates[i],
      result,
    );
    curr.pop();
  }
}
