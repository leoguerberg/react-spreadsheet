import React from 'react';

import { ISpreadsheetCellProps } from './types';

const SpreadsheetCell = (props: ISpreadsheetCellProps) => {
  const { cell, isSelected, onCellSelected, onValueChange } = props;

  const handleValueChange = (event: any) => {
    onValueChange(cell.id, event.target.value);
  };

  const handleCellClick = () => {
    onCellSelected(cell.id);
  };

  return isSelected ? (
    <input type="text" value={cell.value} onChange={handleValueChange} />
  ) : (
    <div onClick={handleCellClick}>{cell.value}</div>
  );
};

export default SpreadsheetCell;
