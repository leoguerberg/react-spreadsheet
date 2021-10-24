import { CellModes, ICell } from 'interfaces/Cell';

import { DEFAULT_COLUMNS_COUNT, DEFAULT_ROWS_COUNT } from './constants';

export const initializeCells = (rows = DEFAULT_ROWS_COUNT, columns = DEFAULT_COLUMNS_COUNT) => {
  let array: ICell[][] = [];
  for (let i = 1; i <= rows; i++) {
    let row = [];
    for (let j = 1; j <= columns; j++) {
      row.push({
        id: {
          row: i,
          col: j,
        },
        value: '',
        mode: i === 1 && j === 1 ? CellModes.EDIT : CellModes.LABEL,
      });
    }
    array.push(row);
  }
  return array;
};

export const numberToChar = (num: number): string => {
  const division = Math.floor(num / 26);
  const reminder = Math.floor(num % 26);
  const char = String.fromCharCode(reminder + 97).toUpperCase();
  return division - 1 >= 0 ? numberToChar(division - 1) + char : char;
};

export const charToNumber = (letters: string) => {
  return letters
    .split('')
    .reverse()
    .map((letter, index) =>
      index === 0 ? letter.toLowerCase().charCodeAt(0) - 96 : letter.toLowerCase().charCodeAt(0) - 96 + 1,
    )
    .map((base26Number, position) => base26Number * 26 ** position)
    .reduce((sum: number, number: number) => sum + number, 0);
};

export const cellIdtoMatrixIndices = (cellId: string) => {
  const columnLetters = cellId.match(/[A-Z]+/)![0];
  const columnNumber = charToNumber(columnLetters);
  const rowNumber = parseInt(cellId.match(/[0-9]+/)![0]) - 1;
  return {
    col: columnNumber,
    row: rowNumber,
  };
};

export const hasRecursiveDependency = (expressionCells: string[], cellsToValidate: string[]) => {
  return expressionCells.some((cell) => {
    return cellsToValidate.includes(cell);
  });
};
