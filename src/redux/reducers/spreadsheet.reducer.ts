import { ICell, ICellId } from '../../interfaces/Cell';
import * as spreadsheetConstants from '../constants/spreadsheet.constants';

const createArray = () => {
  let array: ICell[][] = [];
  for (let i = 1; i < 24; i++) {
    let row = [];
    for (let j = 1; j < 24; j++) {
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

export interface ISpreadsheetReducerState {
  spreadsheet: ICell[][];
  selectedCellId: ICellId;
}

const DEFAULT_STATE: ISpreadsheetReducerState = {
  spreadsheet: createArray(),
  selectedCellId: {
    row: 0,
    col: 0,
  },
};

const updateCellValue = (state: ISpreadsheetReducerState, cellId: ICellId, newValue: string) => {
  const updatedSpreadsheet = state.spreadsheet.map((row, rowNumber) => {
    if (rowNumber + 1 === cellId.row) {
      return row.map((cell, columnNumber) => {
        if (columnNumber + 1 === cellId.col) {
          return {
            ...cell,
            value: newValue,
          };
        }
        return cell;
      });
    }
    return row;
  });
  return {
    ...state,
    spreadsheet: updatedSpreadsheet,
  };
};

const setSelectedCell = (state: ISpreadsheetReducerState, cellId: ICellId) => ({
  ...state,
  selectedCellId: cellId,
});

const spreadsheetReducer = (state = DEFAULT_STATE, action: any) => {
  switch (action.type) {
    case spreadsheetConstants.SPREADSHEET_ON_CELL_VALUE_CHANGE:
      return updateCellValue(state, action.cellId, action.newValue);
    case spreadsheetConstants.SPREADSHEET_ON_CELL_SELECTED:
      return setSelectedCell(state, action.cellId);
    default:
      return state;
  }
};

export default spreadsheetReducer;
