import React from 'react';
import { generateNumbersArray } from '@ionaru/array-utils';

import SpreadsheetCell from '../../components/SpreadsheetCell';
import { getA1Notation } from '../../utils/cells';
import { CellWrapper, SpreadsheetWrapper } from './styles';
import { ISpreadsheetProps } from './types';

const Spreadsheet = (props: ISpreadsheetProps) => {
  const { spreadsheet, rowsCount, columnCount, onCellSelected, onCellValueChange } = props;

  const rows = generateNumbersArray(rowsCount, 0);
  const columns = generateNumbersArray(columnCount, 0);

  return (
    <SpreadsheetWrapper>
      {rows.map((rowNumber) => {
        return (
          <>
            <CellWrapper isAxisCell row={rowNumber + 2} column={1}>
              {rowNumber + 1}
            </CellWrapper>
            {columns.map((columnNumber) => {
              return (
                <>
                  {rowNumber === 0 && (
                    <CellWrapper isAxisCell row={1} column={columnNumber + 2}>
                      {getA1Notation(columnNumber + 1)}
                    </CellWrapper>
                  )}
                  <CellWrapper row={rowNumber + 2} column={columnNumber + 2}>
                    <SpreadsheetCell
                      cell={spreadsheet[rowNumber][columnNumber]}
                      onCellSelected={onCellSelected}
                      onValueChange={onCellValueChange}
                    />
                  </CellWrapper>
                </>
              );
            })}
          </>
        );
      })}
    </SpreadsheetWrapper>
  );
};

export default Spreadsheet;
