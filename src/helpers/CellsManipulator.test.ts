import { checkValidNeighbor, incrementNeighbors } from "./CellsManipulator";
import { CellState } from "./Field";

describe("CellsManipulator Test Cases", () => {
  const { bomb, empty } = CellState;
  test("Increment Neighbor with ", () => {
    expect(incrementNeighbors([0, 0], [[bomb]])).toStrictEqual([[bomb]]);
  });

  test("Increment Neighbor with 1 Bomb", () => {
    expect(
      incrementNeighbors(
        [0, 0],
        [
          [bomb, empty],
          [empty, empty],
        ]
      )
    ).toStrictEqual([
      [bomb, 1],
      [1, 1],
    ]);
  });

  test("Increment Neighbor with 1 Bomb", () => {
    expect(
      incrementNeighbors(
        [0, 0],
        [
          [bomb, empty],
          [empty, bomb],
        ]
      )
    ).toStrictEqual([
      [bomb, 1],
      [1, bomb],
    ]);
  });

  test("Increment Neighbor with 1 Bomb at center", () => {

    expect(
      incrementNeighbors(
        [1, 1],
        [
          [empty, empty, empty],
          [empty, bomb, empty],
          [empty, empty, empty],
        ]
      )
    ).toStrictEqual([
      [1, 1, 1],
      [1, bomb, 1],
      [1, 1, 1],
    ]);
  });

  test("Increment Neighbor with 2 Bomb", () => {
    expect(
      incrementNeighbors(
        [1, 1],
        [
          [empty, empty, empty],
          [empty, bomb, 1],
          [empty, 1, bomb],
        ]
      )
    ).toStrictEqual([
      [1, 1, 1],
      [1, bomb, 2],
      [1, 2, bomb],
    ]);
  });
  test("Check Valid Neighbor", () => {
    const field = [
      [empty, empty],
      [empty, empty],
    ];
    expect(checkValidNeighbor([3, 0], field)).toBe(false);
    expect(checkValidNeighbor([1, 2], field)).toBe(false);
    expect(checkValidNeighbor([0, 1], field)).toBe(true);
    expect(checkValidNeighbor([1, 0], field)).toBe(true);
  });
});
