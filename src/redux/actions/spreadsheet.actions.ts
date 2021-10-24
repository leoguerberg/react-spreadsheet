import * as constants from '../constants/spreadsheet.constants';
import { CellModes, ICellId } from '../../interfaces/Cell';

export const onCellValueChange = (cellId: ICellId, newValue: string) => ({
  type: constants.SPREADSHEET_ON_CELL_VALUE_CHANGE,
  cellId,
  newValue,
});

export const onCellModeChange = (cellId: ICellId, newMode: CellModes) => ({
  type: constants.SPREASHEET_ON_CELL_MODE_CHANGE,
  cellId,
  newMode,
});
