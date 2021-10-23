import { ICell, ICellId } from '../../interfaces/Cell';
import { initializeCells } from '../../utils/cells';
import * as spreadsheetConstants from '../constants/spreadsheet.constants';

export interface ISpreadsheetReducerState {
  spreadsheet: ICell[][];
}

const DEFAULT_STATE: ISpreadsheetReducerState = {
  spreadsheet: initializeCells(),
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

const spreadsheetReducer = (state = DEFAULT_STATE, action: any) => {
  switch (action.type) {
    case spreadsheetConstants.SPREADSHEET_ON_CELL_VALUE_CHANGE:
      return updateCellValue(state, action.cellId, action.newValue);
    default:
      return state;
  }
};

export default spreadsheetReducer;
