import { ICell } from '../../interfaces/Cell';

export interface ISpreadsheetProps {
  cells: ICell[];
  selectedCellId: string;
  onCellSelected: (cellId: string) => void;
  onCellValueChange: (cellId: string, newValue: string) => void;
}

export interface ICellWrapperProps {
  row: number;
  column: number;
}
