import React from 'react';

import { Input, Label, Wrapper } from './styles';
import { ISpreadsheetCellProps } from './types';

const SpreadsheetCell = (props: ISpreadsheetCellProps) => {
  const { cell, isSelected, onCellSelected, onValueChange } = props;
 
  const handleValueChange = (event: any) => {
    onValueChange(cell.id, event.target.value);
  };

  const handleCellClick = () => {
    onCellSelected(cell.id);
  };

  return (
    <Wrapper onClick={handleCellClick}>
      {isSelected ? (
        <Input type="text" value={cell.value} onChange={handleValueChange} />
      ) : (
        <Label>{cell.evaluatedValue}</Label>
      )}
    </Wrapper>
  );
};

export default SpreadsheetCell;
