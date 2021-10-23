import { createSelector } from 'reselect';

import { IReduxState } from '../store';

const getSelectedCell = (state: IReduxState) => {
  return state.spreadsheet.selectedCellId;
};

const selectedCellSelector = () => createSelector([getSelectedCell], (selectedCell) => selectedCell);

export default selectedCellSelector;
