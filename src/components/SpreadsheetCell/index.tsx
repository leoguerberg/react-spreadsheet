import React, { ChangeEvent, KeyboardEvent, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import { CellModes } from 'interfaces/Cell';
import cellModeSelector from 'redux/selectors/cellMode.selector';
import cellValueSelector from 'redux/selectors/cellValue.selector';
import evaluatedCellValueSelector from 'redux/selectors/evaluatedCellValue.selector';
import { numberToChar } from 'utils/cells';

import { Input, Label, Wrapper } from './styles';
import { ISpreadsheetCellProps } from './types';

const SpreadsheetCell = (props: ISpreadsheetCellProps) => {
  const { cell, onKeyPressed, onModeChange, onValueChange } = props;
  const cellId = `${numberToChar(cell.col)}${cell.row}`;
  const inputRef = useRef<HTMLInputElement>(null);

  const value = useSelector(cellValueSelector(cell));
  const mode = useSelector(cellModeSelector(cell));
  const evaluatedValue = useSelector(evaluatedCellValueSelector(cell));

  const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    onValueChange(cell, event.target.value);
  };

  const handleCellClick = () => {
    onModeChange(cell, CellModes.EDIT);
  };

  const handleKeyPressed = (event: KeyboardEvent<HTMLInputElement>) => {
    onKeyPressed(cell, event.key);
  };

  useEffect(() => {
    if (mode === CellModes.EDIT) {
      inputRef.current?.focus();
    }
  }, [mode]);

  return (
    <Wrapper isEditMode={mode === CellModes.EDIT} onClick={handleCellClick}>
      {mode === CellModes.EDIT ? (
        <Input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleValueChange}
          onKeyDown={handleKeyPressed}
          data-cell-id={cellId}
        />
      ) : (
        <Label data-cell-id={cellId} isError={evaluatedValue === '!ERROR'}>
          {evaluatedValue}
        </Label>
      )}
    </Wrapper>
  );
};

export default SpreadsheetCell;
