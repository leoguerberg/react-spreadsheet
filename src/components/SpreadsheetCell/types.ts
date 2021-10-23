import { ICell, ICellId } from '../../interfaces/Cell';

export interface ISpreadsheetCellProps {
  cell: ICell;
  onValueChange: (cellId: ICellId, newValue: string) => void;
}

export interface ISpreadsheetCellWrapperProps {
  isEditMode: boolean;
}
