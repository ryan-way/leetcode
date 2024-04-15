export function isValidSudoku(board: string[][]): boolean {
  return validRows(board) && validColumns(board) && validSubgrids(board);
}

function validSet(set: string[]): boolean {
  const dotCount = set.filter((s) => s === ".").length;
  const distinct = new Set(set.filter((value) => value !== ".")).size;

  return dotCount + distinct === 9;
}

function validRows(board: string[][]) {
  return board.every((row) => validSet(row));
}

function validColumns(board: string[][]) {
  return Array(9)
    .fill(0)
    .every((_, i) => validSet(board.map((row) => row[i])));
}

function indexToSubgridCoordinates(i: number) {
  const x = (i % 3) * 3;
  const y = Math.floor(i / 3) * 3;
  return [x, y, x + 2, y + 2];
}

function validSubgrids(board: string[][]): boolean {
  return Array(9)
    .fill(0)
    .map((_, i) => indexToSubgridCoordinates(i))
    .map(([sx, sy, ex, ey]) =>
      board.slice(sy, ey + 1).flatMap((row) => row.slice(sx, ex + 1)),
    )
    .every((subgrid) => validSet(subgrid));
}
