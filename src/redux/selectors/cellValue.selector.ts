import { createSelector } from 'reselect';
import { ICellId } from '../../interfaces/Cell';
import { IReduxState } from '../store';

const getSpreadsheet = (state: IReduxState) => {
  return state.spreadsheet.spreadsheet;
};

const cellValueSelector = (cell: ICellId) =>
  createSelector([getSpreadsheet], (spreadsheet) => {
    return spreadsheet[cell.row - 1][cell.col - 1].value;
  });

export default cellValueSelector;
