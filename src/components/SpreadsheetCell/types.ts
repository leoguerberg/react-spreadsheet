import { ICell, ICellId } from '../../interfaces/Cell';

export interface ISpreadsheetCellProps {
  id: ICellId;
  evaluatedValue: string;
  value: string;
  isSelected: boolean;
  onCellSelected: (cellId: ICellId) => void;
  onValueChange: (cellId: ICellId, newValue: string) => void;
}
