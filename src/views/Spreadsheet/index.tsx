import React from 'react';

import { cellA1ToIndex, getA1Notation } from '../../utils/parser';
import SpreadsheetCell from '../../components/SpreadsheetCell';
import { CellWrapper, SpreadsheetWrapper } from './styles';
import { ISpreadsheetProps } from './types';

const Spreadsheet = (props: ISpreadsheetProps) => {
  const { spreadsheet, selectedCellId, onCellSelected, onCellValueChange } = props;

  return (
    <SpreadsheetWrapper>
      {spreadsheet.map((row, i) => {
        return (
          <>
            <CellWrapper row={i + 2} column={1}>
              {i + 1}
            </CellWrapper>
            {row.map((cell, j) => {
              return (
                <>
                  {i === 0 && (
                    <CellWrapper row={1} column={j + 2}>
                      {getA1Notation(j + 1)}
                    </CellWrapper>
                  )}
                  <CellWrapper row={i + 2} column={j + 2}>
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

// const { row, col }: any = cellA1ToIndex(cell.id, 1);
//   return (
//     <>
//       <CellWrapper row={row + 1} column={1}>
//         {row}
//       </CellWrapper>
//       <CellWrapper row={1} column={col + 1}>
//         {getA1Notation(col)}
//       </CellWrapper>
//       <CellWrapper row={row + 1} column={col + 1}>
//         <SpreadsheetCell
//           isSelected={cell.id === selectedCellId}
//           cell={cell}
//           onCellSelected={onCellSelected}
//           onValueChange={onCellValueChange}
//         />
//       </CellWrapper>
//     </>
//   );
// })}
