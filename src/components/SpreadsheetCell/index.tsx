import React from 'react';

import { Input, Label, Wrapper } from './styles';
import { ISpreadsheetCellProps } from './types';

const SpreadsheetCell = (props: ISpreadsheetCellProps) => {
  const { id, value, evaluatedValue,isSelected, onCellSelected, onValueChange } = props;

  console.log("Id: ", value)
  const handleValueChange = (event: any) => {
    onValueChange(id, event.target.value);
  };

  const handleCellClick = () => {
    onCellSelected(id);
  };

  return (
    <Wrapper onClick={handleCellClick}>
      {isSelected ? (
        <Input type="text" value={value} onChange={handleValueChange} />
      ) : (
        <Label>{evaluatedValue}</Label>
      )}
    </Wrapper>
  );
};

export default SpreadsheetCell;
