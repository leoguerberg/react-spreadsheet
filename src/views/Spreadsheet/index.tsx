import React, { Fragment } from 'react';
import { generateNumbersArray } from '@ionaru/array-utils';

import SpreadsheetCell from '../../components/SpreadsheetCell';
import { numberToChar } from '../../utils/cells';
import { CellWrapper, SpreadsheetWrapper } from './styles';
import { ISpreadsheetProps } from './types';
import { CellModes, ICellId } from '../../interfaces/Cell';

const Spreadsheet = (props: ISpreadsheetProps) => {
  const { rowsCount, columnCount, onCellModeChange, onCellValueChange } = props;

  const rows = generateNumbersArray(rowsCount, 0);
  const columns = generateNumbersArray(columnCount, 0);

  const handleKeyPressed = (cell: ICellId, key: string) => {
    switch (key) {
      case 'Enter':
      case 'ArrowDown':
        if (cell.row !== rowsCount) {
          onCellModeChange(cell, CellModes.LABEL);
          onCellModeChange({ row: cell.row + 1, col: cell.col }, CellModes.EDIT);
        }
        break;
      case 'ArrowRight':
        if (cell.col !== columnCount - 1) {
          onCellModeChange(cell, CellModes.LABEL);
          onCellModeChange({ row: cell.row, col: cell.col + 1 }, CellModes.EDIT);
        }
        break;
      case 'ArrowUp':
        if (cell.row !== 1) {
          onCellModeChange(cell, CellModes.LABEL);
          onCellModeChange({ row: cell.row - 1, col: cell.col }, CellModes.EDIT);
        }
        break;
      case 'ArrowLeft':
        if (cell.col !== 1) {
          onCellModeChange(cell, CellModes.LABEL);
          onCellModeChange({ row: cell.row, col: cell.col - 1 }, CellModes.EDIT);
        }
        break;
    }
  };

  return (
    <SpreadsheetWrapper rowsCount={rowsCount} columnCount={columnCount}>
      {rows.map((rowNumber) => {
        return (
          <Fragment key={rowNumber}>
            <CellWrapper isAxisCell row={rowNumber + 2} column={1}>
              {rowNumber + 1}
            </CellWrapper>
            {columns.map((columnNumber) => {
              return (
                <Fragment key={columnNumber}>
                  {rowNumber === 0 && (
                    <CellWrapper isAxisCell row={1} column={columnNumber + 2}>
                      {numberToChar(columnNumber)}
                    </CellWrapper>
                  )}
                  <CellWrapper row={rowNumber + 2} column={columnNumber + 2}>
                    <SpreadsheetCell
                      cell={{ row: rowNumber + 1, col: columnNumber + 1 }}
                      onKeyPressed={handleKeyPressed}
                      onValueChange={onCellValueChange}
                      onModeChange={onCellModeChange}
                    />
                  </CellWrapper>
                </Fragment>
              );
            })}
          </Fragment>
        );
      })}
    </SpreadsheetWrapper>
  );
};

export default Spreadsheet;
