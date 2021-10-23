import React from 'react';

import { getA1Notation } from '../../utils/parser';
import SpreadsheetCell from '../../components/SpreadsheetCell';
import { CellWrapper, SpreadsheetWrapper } from './styles';
import { ISpreadsheetProps } from './types';

const Spreadsheet = (props: ISpreadsheetProps) => {
  const { spreadsheet, selectedCellId, onCellSelected, onCellValueChange } = props;

  return (
    <SpreadsheetWrapper>
      {spreadsheet.map((row, rowNumber) => {
        return (
          <>
            <CellWrapper isAxisCell row={rowNumber + 2} column={1}>
              {rowNumber + 1}
            </CellWrapper>
            {row.map((cell, columnNumber) => {
              return (
                <>
                  {rowNumber === 0 && (
                    <CellWrapper isAxisCell row={1} column={columnNumber + 2}>
                      {getA1Notation(columnNumber + 1)}
                    </CellWrapper>
                  )}
                  <CellWrapper row={rowNumber + 2} column={columnNumber + 2}>
                    <SpreadsheetCell
                      isSelected={cell.id === selectedCellId}
                      cell={cell}
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