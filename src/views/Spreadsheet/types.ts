import { ICell, ICellId } from '../../interfaces/Cell';

export interface ISpreadsheetProps {
  spreadsheet: ICell[][];
  rowsCount: number;
  columnCount: number;
  onCellValueChange: (cellId: ICellId, newValue: string) => void;
}

export interface ISpreadsheetWrapperProps{
  rowsCount: number;
  columnCount: number;
}

export interface ICellWrapperProps {
  row: number;
  column: number;
  isAxisCell?: boolean;
}
