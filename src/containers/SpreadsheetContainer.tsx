import React, { useState } from 'react';
import { evaluate } from 'mathjs';

import { ICell, ICellId } from '../interfaces/Cell';
import Spreadsheet from '../views/Spreadsheet';

const createArray = () => {
  let array: ICell[][] = [];
  for (let i = 1; i < 24; i++) {
    let row = [];
    for (let j = 1; j < 24; j++) {
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
      if (rowNumber + 1 === cellId.row){
        return row.map((cell, columnNumber) => {
          if (columnNumber + 1 === cellId.col){
          let newEvaluatedValue = newValue;
          if(newValue.startsWith('=')){
          try{
            newEvaluatedValue = evaluate(newValue.slice(1))
          } catch{
            newEvaluatedValue = newValue
          }}
            return {
              ...cell,
              value: newValue,
              evaluatedValue: newEvaluatedValue,
            };
          }
          return cell;
        });
      }
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
