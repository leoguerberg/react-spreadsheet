import { evaluate } from 'mathjs';
import { createSelector } from 'reselect';

import { ICell, ICellId } from '../../interfaces/Cell';
import { cellIdtoMatrixIndices } from '../../utils/cells';
import cellValueSelector from './cellValue.selector';

export const getEquationExpression = (
  spreadsheet: ICell[][],
  expression: string,
  cellsToOmit: string[] = [],
) => {
  const cellsToEvaluate: string[] = [...Array.from(expression.matchAll(/[A-Z]+[0-9]+/gi))].map(
    (output: any) => output[0],
  );
  if (
    cellsToEvaluate.some((cell) => {
      return cellsToOmit.includes(cell);
    })
  ) {
    return '!ERROR';
  }
  const cellValues = cellsToEvaluate.map((cellId: string) => {
    let value = '';
    const { row, col } = cellIdtoMatrixIndices(cellId);
    try {
      value = spreadsheet[row][col - 1].value;
      if (value.startsWith('=')) {
        value = getEquationExpression(spreadsheet, value.slice(1), [...cellsToOmit, cellId]);
      }
    } catch {}
    return {
      cellId,
      value,
    };
  });
  const evaluatedExpression = cellValues.reduce(
    (finalExpression, cellValue) => finalExpression.replaceAll(cellValue.cellId, cellValue.value.toString()),
    expression,
  );
  return `(${evaluatedExpression})`;
};

const evaluatedCellValueSelector = (cell: ICellId) =>
  createSelector(
    [(state) => state.spreadsheet.spreadsheet, cellValueSelector(cell)],
    (spreadsheet, value) => {
      let evaluatedValue = value;
      if (value.startsWith('=')) {
        try {
          const expression = getEquationExpression(spreadsheet, value.slice(1));
          if (expression.includes('!ERROR')) {
            return '!ERROR';
          }
          evaluatedValue = evaluate(expression);
        } catch {
          evaluatedValue = value;
        }
      }
      return evaluatedValue;
    },
  );

export default evaluatedCellValueSelector;
