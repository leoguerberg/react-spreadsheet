import React, { ChangeEvent, useEffect, useState } from 'react';

import { evaluateValue } from '../../utils/math';
import { Input, Label, Wrapper } from './styles';
import { ISpreadsheetCellProps } from './types';

const SpreadsheetCell = (props: ISpreadsheetCellProps) => {
  const { cell, onCellSelected, onValueChange } = props;
  const cellId = `${cell.id.row}_${cell.id.col}`;

  const [isEditMode, setIsEditMode] = useState(false);
  const [value, setValue] = useState('');

  const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onValueChange(cell.id, event.target.value);
  };

  const handleCellClick = () => {
    setIsEditMode(true);
    onCellSelected(cell.id);
  };

  const onClickOutsideInputHandler = (event: MouseEvent) => {
    if ((event.target as HTMLElement)?.dataset?.cellId !== cellId) {
      setIsEditMode(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', onClickOutsideInputHandler);
    return document.addEventListener('click', onClickOutsideInputHandler);
  });

  return (
    <Wrapper onClick={handleCellClick}>
      {isEditMode ? (
        <Input type="text" value={value} onChange={handleValueChange} data-cell-id={cellId} />
      ) : (
        <Label data-cell-id={cellId}>{evaluateValue(value)}</Label>
      )}
    </Wrapper>
  );
};

export default SpreadsheetCell;
