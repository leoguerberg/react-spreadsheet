import { evaluate } from 'mathjs';
import { createSelector } from 'reselect';

import { ICellId } from '../../interfaces/Cell';
import { cellIdtoMatrixIndices } from '../../utils/cells';
import { IReduxState } from '../store';
import cellValueSelector from './cellValue.selector';

export const getEquationExpressionFromState = (state: IReduxState, expression: string) => {
  const cellValues = [...Array.from(expression.matchAll(/[A-Z]+[0-9]+/gi))]
    .map((regrexOutput: any) => regrexOutput[0])
    .map((cellId: string) => {
      const { row, col } = cellIdtoMatrixIndices(cellId);
      let value = '';
      try {
        value = state.spreadsheet.spreadsheet[row][col - 1].value;
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

  // Evaluated expression needs to be added between brackets to avoid issues caused
  // by Mathematical operations priority
  return `(${evaluatedExpression})`;
};

const evaluatedCellValueSelector = (cell: ICellId) =>
  createSelector([(state) => state, cellValueSelector(cell)], (state, value) => {
    let evaluatedValue = value;
    if (value.startsWith('=')) {
      try {
        const expression = getEquationExpressionFromState(state, value.slice(1));
        evaluatedValue = evaluate(expression);
      } catch {
        evaluatedValue = value;
      }
    }
    return evaluatedValue;
  });

export default evaluatedCellValueSelector;
