import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import * as spreadsheetActions from '../redux/actions/spreadsheet.actions';

import { ICellId } from '../interfaces/Cell';
import Spreadsheet from '../views/Spreadsheet';
import { initializeCells } from '../utils/cells';
import { DEFAULT_COLUMNS_COUNT, DEFAULT_ROWS_COUNT } from '../utils/constants';

const SpreadsheetContainer = () => {
  const dispatch = useDispatch();

  const handleCellValueChange = (cellId: ICellId, newValue: string) => {
    dispatch(spreadsheetActions.onCellValueChange(cellId, newValue));
  };

  const handleCellSelected = useCallback((cellId: ICellId) => {}, []);

  return (
    <Spreadsheet
      rowsCount={DEFAULT_ROWS_COUNT}
      columnCount={DEFAULT_COLUMNS_COUNT}
      spreadsheet={initializeCells()}
      onCellSelected={handleCellSelected}
      onCellValueChange={handleCellValueChange}
    />
  );
};

export default SpreadsheetContainer;
