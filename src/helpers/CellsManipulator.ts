import { Coords, Field, Cell } from "./Field";

export const getNeighborItem = ([x, y]: Coords): Record<
  string,
  [number, number]
> => {
  return {
    top: [x - 1, y],
    topRight: [x - 1, y + 1],
    right: [x, y + 1],
    rightBottom: [x + 1, y + 1],
    bottom: [x + 1, y],
    bottomLeft: [x + 1, y - 1],
    left: [x, y - 1],
    leftTop: [x - 1, y - 1],
  };
};

export const checkValidNeighbor = (
  [x, y]: Coords,
  { length }: Field
): boolean => x >= 0 && y >= 0 && length - y > 0 && length - x > 0;

export const incrementNeighbors = (coords: Coords, field: Field): Field => {
  const items = getNeighborItem(coords);

  for (const item of Object.values(items)) {
    if (checkValidNeighbor(item, field)) {
      const [x, y] = item;
      const cell = field[x][y];
      if (cell < 8) {
        field[x][y] = (cell + 1) as Cell;
      }
    }
  }
  return field;
};
