import { ICell, ICellId } from '../../interfaces/Cell';

export interface ISpreadsheetCellProps {
  cell: ICell;
  onCellSelected: (cellId: ICellId) => void;
  onValueChange: (cellId: ICellId, newValue: string) => void;
}
