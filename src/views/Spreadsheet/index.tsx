import React from 'react';

import { cellA1ToIndex, getA1Notation } from '../../utils/parser';
import SpreadsheetCell from '../../components/SpreadsheetCell';
import { CellWrapper, SpreadsheetWrapper } from './styles';
import { ISpreadsheetProps } from './types';

const Spreadsheet = (props: ISpreadsheetProps) => {
  const { cells, selectedCellId, onCellSelected, onCellValueChange } = props;

  return (
    <SpreadsheetWrapper>
      {cells.map((cell) => {
        const { row, col }: any = cellA1ToIndex(cell.id, 1);
        return (
          <>
            <CellWrapper row={row + 1} column={1}>
              {row}
            </CellWrapper>
            <CellWrapper row={1} column={col + 1}>
              {getA1Notation(col)}
            </CellWrapper>
            <CellWrapper row={row + 1} column={col + 1}>
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
    </SpreadsheetWrapper>
  );
};

export default Spreadsheet;
