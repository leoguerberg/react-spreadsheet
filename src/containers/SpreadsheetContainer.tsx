import React from 'react';
import { useDispatch } from 'react-redux';

import * as spreadsheetActions from '../redux/actions/spreadsheet.actions';

import { ICellId } from '../interfaces/Cell';
import Spreadsheet from '../views/Spreadsheet';
import { DEFAULT_COLUMNS_COUNT, DEFAULT_ROWS_COUNT } from '../utils/constants';

const SpreadsheetContainer = () => {
  const dispatch = useDispatch();

  const handleCellValueChange = (cellId: ICellId, newValue: string) => {
    dispatch(spreadsheetActions.onCellValueChange(cellId, newValue));
  };

  return (
    <Spreadsheet
      rowsCount={DEFAULT_ROWS_COUNT}
      columnCount={DEFAULT_COLUMNS_COUNT}
      onCellValueChange={handleCellValueChange}
    />
  );
};

export default SpreadsheetContainer;
