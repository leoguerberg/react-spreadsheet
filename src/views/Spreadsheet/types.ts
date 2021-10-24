import { CellModes, ICell, ICellId } from 'interfaces/Cell';

export interface ISpreadsheetProps {
  rowsCount: number;
  columnCount: number;
  onCellModeChange: (cellId: ICellId, newMode: CellModes) => void;
  onCellValueChange: (cellId: ICellId, newValue: string) => void;
}

export interface ISpreadsheetWrapperProps {
  rowsCount: number;
  columnCount: number;
}

export interface ICellWrapperProps {
  row: number;
  column: number;
  isAxisCell?: boolean;
}
