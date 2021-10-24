import { CellModes, ICell, ICellId } from '../../interfaces/Cell';
import { initializeCells } from '../../utils/cells';
import * as spreadsheetConstants from '../constants/spreadsheet.constants';

export interface ISpreadsheetReducerState {
  spreadsheet: ICell[][];
}

const DEFAULT_STATE: ISpreadsheetReducerState = {
  spreadsheet: initializeCells(),
};

const updateCell = (
  state: ISpreadsheetReducerState,
  cellId: ICellId,
  newValue?: string,
  newMode?: CellModes,
) => {
  const updatedSpreadsheet = state.spreadsheet.map((row, rowNumber) => {
    if (rowNumber + 1 === cellId.row) {
      return row.map((cell, columnNumber) => {
        if (columnNumber + 1 === cellId.col) {
          return {
            ...cell,
            value: newValue !== undefined ? newValue : cell.value,
            mode: newMode !== undefined ? newMode : cell.mode,
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

const disableAllCells = (state: ISpreadsheetReducerState) => {
  const updatedSpreadsheet = state.spreadsheet.map((row) => {
    return row.map((cell) => {
      if (cell.mode === CellModes.EDIT) {
        return {
          ...cell,
          mode: CellModes.LABEL,
        };
      }
      return cell;
    });
  });
  return {
    ...state,
    spreadsheet: updatedSpreadsheet,
  };
};

// Todo: type action
const spreadsheetReducer = (state = DEFAULT_STATE, action: any) => {
  switch (action.type) {
    case spreadsheetConstants.SPREADSHEET_ON_CELL_VALUE_CHANGE:
      return updateCell(state, action.cellId, action.newValue);
    case spreadsheetConstants.SPREASHEET_ON_CELL_MODE_CHANGE:
      return updateCell(disableAllCells(state), action.cellId, undefined, action.newMode);
    default:
      return state;
  }
};

export default spreadsheetReducer;
