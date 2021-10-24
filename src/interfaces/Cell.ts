export enum CellModes {
  EDIT,
  LABEL,
}

export interface ICellId {
  row: number;
  col: number;
}

export interface ICell {
  id: ICellId;
  value: string;
  mode: CellModes;
}
