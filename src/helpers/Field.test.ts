import { emptyFieldGenerator, CellState, fieldGenerator } from "./Field";

describe("Field Generator Tests", () => {
  const { empty, bomb } = CellState;
  describe("Empty Field Generator Test", () => {
    it("2 x 2", () => {
      expect(emptyFieldGenerator(2)).toStrictEqual([
        [empty, empty],
        [empty, empty],
      ]);
    });
  });

  describe("Field Generator test with Bomb", () => {
    it("2 x 2", () => {
      expect(emptyFieldGenerator(2, bomb)).toStrictEqual([
        [bomb, bomb],
        [bomb, bomb],
      ]);
    });
  });

  describe("Field Generator test with empty", () => {
    it("3 x 3", () => {
      expect(emptyFieldGenerator(3)).toStrictEqual([
        [empty, empty, empty],
        [empty, empty, empty],
        [empty, empty, empty],
      ]);
    });
  });

  describe("Field Generator with probability", () => {
    it("Error Case for probability", () => {
      const error = `Invalid probability. probability must be Less than zero and greater than One`;
      expect(() => fieldGenerator(2, -1)).toThrow(error);
    });
  });

  describe("Filed Generator", () => {
    console.log("asdfasd", fieldGenerator(1, 0));
    it("Zero Bombs", () => {
      expect(fieldGenerator(1, 0)).toStrictEqual([[empty]]);
    });

    it("Field Generator with bombs", () => {
      expect(fieldGenerator(1, 1)).toStrictEqual([[bomb]]);
    });

    it("Field Generator with bombs", () => {
      expect(fieldGenerator(2, 1)).toStrictEqual([
        [bomb, bomb],
        [bomb, bomb],
      ]);
    });

    it("Field Generator with bombs with 50% Bombs", () => {
      const field = fieldGenerator(4, 0.5);
      const flatField = field.flat();

      const cellWithBombs = flatField.filter((cell) => cell === bomb);
      const safeCells = flatField.filter((cell) => cell === empty);
      console.table(field);
      console.table(flatField);

      expect(cellWithBombs).toHaveLength(8);
      expect(safeCells).toHaveLength(8);
    });
  });
});
