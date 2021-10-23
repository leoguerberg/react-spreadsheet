import { ICell } from '../interfaces/Cell';
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
        evaluatedValue: '',
      });
    }
    array.push(row);
  }
  return array;
};

export const getA1Notation = (_num: number) => {
  let str = '';
  const multiples = Math.ceil(_num / 26);
  let _charAtCode = _num - (multiples - 1) * 26;
  for (let i = 0; i < multiples; i++) str += String.fromCharCode(_charAtCode + 64);
  return str;
};
