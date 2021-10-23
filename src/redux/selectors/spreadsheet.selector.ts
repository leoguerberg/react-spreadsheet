import { createSelector } from 'reselect';

import { IReduxState } from '../store';
import { evaluateValue } from '../../utils/math';

const getSpreadsheet = (state: IReduxState) => {
  return state.spreadsheet.spreadsheet;
};

const spreadsheetSelector = () =>
  createSelector([getSpreadsheet], (spreadsheet) => {
    return spreadsheet.map((row) => {
      return row.map((cell) => ({
        ...cell,
        evaluatedValue: evaluateValue(cell.value),
      }));
    });
  });

export default spreadsheetSelector;
