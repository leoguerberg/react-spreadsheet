import React, { useState } from 'react';

import { ICell } from '../interfaces/Cell';
import Spreadsheet from '../views/Spreadsheet';

const createArray = () => {
  let array: ICell[] = [];
  for (let i = 1; i < 101; i++) {
    array.push({
      id: `A${i}`,
      value: '10',
    });
  }
  return array;
};

const SpreadsheetContainer = () => {
  // todo: move state to redux
  const [cells, setCells] = useState<ICell[]>(createArray());
  const [selectedCellId, setSelectedCellId] = useState('');

  const handleCellValueChange = (cellId: string, newValue: string) => {
    const updatedCells = cells.map((cell) => {
      if (cell.id === cellId) {
        return {
          ...cell,
          value: newValue,
        };
      }
      return cell;
    });
    setCells(updatedCells);
  };

  return (
    <Spreadsheet
      cells={cells}
      selectedCellId={selectedCellId}
      onCellSelected={setSelectedCellId}
      onCellValueChange={handleCellValueChange}
    />
  );
};

export default SpreadsheetContainer;
