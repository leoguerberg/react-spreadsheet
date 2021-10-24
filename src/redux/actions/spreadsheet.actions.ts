import { CellModes, ICellId } from 'interfaces/Cell';

import * as constants from '../constants/spreadsheet.constants';

export interface ISpreadsheetAction {
  cellId: ICellId;
  newValue?: string;
  newMode?: CellModes;
}

export const onCellValueChange = (cellId: ICellId, newValue: string) => ({
  type: constants.SPREADSHEET_ON_CELL_VALUE_CHANGE,
  payload: { cellId, newValue },
});

export const onCellModeChange = (cellId: ICellId, newMode: CellModes) => ({
  type: constants.SPREASHEET_ON_CELL_MODE_CHANGE,
  payload: { cellId, newMode },
});
