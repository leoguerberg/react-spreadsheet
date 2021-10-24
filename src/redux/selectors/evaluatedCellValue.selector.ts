import { evaluate } from 'mathjs';
import { createSelector } from 'reselect';

import { ICell, ICellId } from '../../interfaces/Cell';
import { cellIdtoMatrixIndices } from '../../utils/cells';
import cellValueSelector from './cellValue.selector';

export const getEquationExpressionFromState = (spreadsheet: ICell[][], expression: string) => {
  // Todo: add !ERROR
  const cellValues = [...Array.from(expression.matchAll(/[A-Z]+[0-9]+/gi))]
    .map((output: any) => output[0])
    .map((cellId: string) => {
      let value = '';
      const { row, col } = cellIdtoMatrixIndices(cellId);
      try {
        value = spreadsheet[row][col - 1].value;
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
  createSelector([(state) => state.spreadsheet.spreadsheet, cellValueSelector(cell)], (spreadsheet, value) => {
    let evaluatedValue = value;
    if (value.startsWith('=')) {
      try {
        const expression = getEquationExpressionFromState(spreadsheet, value.slice(1));
        evaluatedValue = evaluate(expression);
      } catch {
        evaluatedValue = value;
      }
    }
    return evaluatedValue;
  });

export default evaluatedCellValueSelector;
