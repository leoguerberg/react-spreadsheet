import React, { Fragment } from 'react';
import { generateNumbersArray } from '@ionaru/array-utils';

import SpreadsheetCell from '../../components/SpreadsheetCell';
import { getA1Notation } from '../../utils/cells';
import { CellWrapper, SpreadsheetWrapper } from './styles';
import { ISpreadsheetProps } from './types';

const Spreadsheet = (props: ISpreadsheetProps) => {
  const { spreadsheet, rowsCount, columnCount, onCellValueChange } = props;

  const rows = generateNumbersArray(rowsCount, 0);
  const columns = generateNumbersArray(columnCount, 0);

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
                      {getA1Notation(columnNumber + 1)}
                    </CellWrapper>
                  )}
                  <CellWrapper row={rowNumber + 2} column={columnNumber + 2}>
                    <SpreadsheetCell
                      cell={spreadsheet[rowNumber][columnNumber]}
                      onValueChange={onCellValueChange}
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
