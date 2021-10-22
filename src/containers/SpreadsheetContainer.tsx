import { evaluate } from 'mathjs';
import React, { useState } from 'react';

import { getA1Notation } from '../utils/parser';
import { ICell } from '../interfaces/Cell';
import Spreadsheet from '../views/Spreadsheet';

const createArray = () => {
  let array: ICell[] = [];
  for (let i = 1; i < 10; i++) {
    for(let j = 1; j<10; j++ ){
      array.push({
        id:`${getA1Notation(j)}${i}`,
        value: '10',
        evaluatedValue: '10'
      })
    }
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
        let evaluatedValue = newValue;
        if(newValue.startsWith('=')){
        try {
          evaluatedValue = evaluate(newValue.slice(1))
        } catch {
          evaluatedValue = newValue;
        }}
        return {
          ...cell,
          value: newValue,
          evaluatedValue,
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
