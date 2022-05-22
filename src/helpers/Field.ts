import { incrementNeighbors } from "./CellsManipulator";

export type Cell = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type Field = Cell[][];
export type Coords = [number, number];

export const CellState: Record<string, Cell> = {
  empty: 0,
  bomb: 9,
  hidden: 10,
  mark: 11,
  weakMark: 12,
};

export const emptyFieldGenerator = (
  size: number,
  state: Cell = CellState.empty
): Field => new Array(size).fill(state).map(() => new Array(size).fill(state));

export const fieldGenerator = (size: number, probability: number): Field => {
  if (probability > 1 || probability < 0) {
    throw new Error(
      `Invalid probability. probability must be Less than zero and greater than One`
    );
  }

  let safeCellsCount = size * size;
  let cellWithBombs = safeCellsCount * probability;

  const results: Field = emptyFieldGenerator(size);

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (cellWithBombs === 0) return results;
      if (cellWithBombs / safeCellsCount > Math.random()) {
        results[i][j] = CellState.bomb;
        incrementNeighbors([i, j], results);
        cellWithBombs--;
      }
      safeCellsCount--;
    }
  }

  return results;
};
