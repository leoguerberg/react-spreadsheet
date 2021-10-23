import { evaluate } from 'mathjs';
import React, { useState } from 'react';

import { getA1Notation } from '../utils/parser';
import { ICell, ICellId } from '../interfaces/Cell';
import Spreadsheet from '../views/Spreadsheet';

const createArray = () => {
  let array: ICell[][] = [];
  for (let i = 1; i < 10; i++) {
    let row = [];
    for (let j = 1; j < 10; j++) {
      row.push({
        id: {
          row: i,
          col: j,
        },
        value: '',
        evaluatedValue: '',
      });
    }
    array.push(row);
  }
  return array;
};

const SpreadsheetContainer = () => {
  // todo: move state to redux
  const [spreadsheet, setSpreadsheet] = useState<ICell[][]>(createArray());
  const [selectedCellId, setSelectedCellId] = useState({
    row: 0,
    col: 0,
  });

  const handleCellValueChange = (cellId: ICellId, newValue: string) => {
    const updatedSpreadsheet = spreadsheet.map((row, rowNumber) => {
      if (rowNumber + 1 === cellId.row)
        return row.map((cell, columnNumber) => {
          if (columnNumber + 1 === cellId.col)
            return {
              ...cell,
              value: newValue,
              evaluatedValue: newValue,
            };
          return cell;
        });
      return row;
    });
    setSpreadsheet(updatedSpreadsheet);
  };

  return (
    <Spreadsheet
      spreadsheet={spreadsheet}
      selectedCellId={selectedCellId}
      onCellSelected={setSelectedCellId}
      onCellValueChange={handleCellValueChange}
    />
  );
};

export default SpreadsheetContainer;
