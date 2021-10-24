import React from 'react';
import { useDispatch } from 'react-redux';

import * as spreadsheetActions from 'redux/actions/spreadsheet.actions';
import { CellModes, ICellId } from 'interfaces/Cell';
import { DEFAULT_COLUMNS_COUNT, DEFAULT_ROWS_COUNT } from 'utils/constants';
import Spreadsheet from 'views/Spreadsheet';

const SpreadsheetContainer = () => {
  const dispatch = useDispatch();

  const handleCellValueChange = (cellId: ICellId, newValue: string) => {
    dispatch(spreadsheetActions.onCellValueChange(cellId, newValue));
  };

  const handleCellModeChange = (cellId: ICellId, newMode: CellModes) => {
    dispatch(spreadsheetActions.onCellModeChange(cellId, newMode));
  };

  return (
    <Spreadsheet
      rowsCount={DEFAULT_ROWS_COUNT}
      columnCount={DEFAULT_COLUMNS_COUNT}
      onCellModeChange={handleCellModeChange}
      onCellValueChange={handleCellValueChange}
    />
  );
};

export default SpreadsheetContainer;
