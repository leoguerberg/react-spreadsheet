import { ICell, ICellId } from '../../interfaces/Cell';

export interface ISpreadsheetProps {
  spreadsheet: ICell[][];
  rowsCount: number;
  columnCount: number;
  onCellSelected: (cellId: ICellId) => void;
  onCellValueChange: (cellId: ICellId, newValue: string) => void;
}

export interface ICellWrapperProps {
  row: number;
  column: number;
  isAxisCell?: boolean;
}
