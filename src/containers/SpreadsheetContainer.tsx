import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import spreadsheetSelector from '../redux/selectors/spreadsheet.selector';
import selectedCellSelector from '../redux/selectors/selectedCell.selector';
import * as spreadsheetActions from '../redux/actions/spreadsheet.actions';

import { ICellId } from '../interfaces/Cell';
import Spreadsheet from '../views/Spreadsheet';

const SpreadsheetContainer = () => {
  const dispatch = useDispatch();

  const spreadsheet = useSelector(spreadsheetSelector());
  const selectedCell = useSelector(selectedCellSelector());

  const handleCellValueChange = (cellId: ICellId, newValue: string) => {
    dispatch(spreadsheetActions.onCellValueChange(cellId, newValue));
  };

  const handleCellSelected = (cellId: ICellId) => {
    dispatch(spreadsheetActions.onCellSelected(cellId));
  };

  return (
    <Spreadsheet
      spreadsheet={spreadsheet}
      selectedCellId={selectedCell}
      onCellSelected={handleCellSelected}
      onCellValueChange={handleCellValueChange}
    />
  );
};

export default SpreadsheetContainer;
