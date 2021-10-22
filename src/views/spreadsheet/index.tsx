import React from 'react';

import SpreadsheetCell from '../../components/SpreadsheetCell';
import { Wrapper } from './styles';
import { ISpreadsheetProps } from './types';

const Spreadsheet = (props: ISpreadsheetProps) => {
  const { cells, selectedCellId, onCellSelected, onCellValueChange } = props;

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Spreadsheet;
