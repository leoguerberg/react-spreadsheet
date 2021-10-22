import React from 'react';

import SpreadsheetCell from '../../components/SpreadsheetCell';
import { SpreadsheetWrapper } from './styles';
import { ISpreadsheetProps } from './types';

const Spreadsheet = (props: ISpreadsheetProps) => {
  const { cells, selectedCellId, onCellSelected, onCellValueChange } = props;

  return (
    <SpreadsheetWrapper>
      {cells.map((cell) => {
        return (
          <SpreadsheetCell
            isSelected={cell.id === selectedCellId}
            cell={cell}
            onCellSelected={onCellSelected}
            onValueChange={onCellValueChange}
          />
        );
      })}
    </SpreadsheetWrapper>
  );
};

export default Spreadsheet;
