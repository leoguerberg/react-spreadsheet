import { ICell, ICellId } from '../../interfaces/Cell';

export interface ISpreadsheetProps {
  spreadsheet: ICell[][];
  selectedCellId: ICellId;
  onCellSelected: (cellId: ICellId) => void;
  onCellValueChange: (cellId: ICellId, newValue: string) => void;
}

export interface ICellWrapperProps {
  row: number;
  column: number;
  isAxisCell?: boolean;
}
