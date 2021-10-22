import { ICell } from '../../interfaces/Cell';

export interface ISpreadsheetCellProps {
  cell: ICell;
  isSelected: boolean;
  onCellSelected: (cellId: string) => void;
  onValueChange: (cellId: string, newValue: string) => void;
}
