import { boolean } from 'mathjs';

import { CellModes, ICellId } from 'interfaces/Cell';

export interface ISpreadsheetCellProps {
  cell: ICellId;
  onModeChange: (cellId: ICellId, newMode: CellModes) => void;
  onKeyPressed: (cellId: ICellId, key: string) => void;
  onValueChange: (cellId: ICellId, newValue: string) => void;
}

export interface ISpreadsheetCellWrapperProps {
  isEditMode: boolean;
}

export interface ISpreadsheetCellLabelProps {
  isError: boolean;
}
