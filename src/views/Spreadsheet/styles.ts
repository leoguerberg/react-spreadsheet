import styled from 'styled-components';

import { ICellWrapperProps, ISpreadsheetWrapperProps } from './types';

export const SpreadsheetWrapper = styled.div<ISpreadsheetWrapperProps>`
  display: grid;
  grid-template-columns: 30px repeat(${(props) => props.columnCount}, 150px);
  grid-template-rows: 30px repeat(${(props) => props.rowsCount}, 30px);
  overflow: auto;
`;

export const CellWrapper = <any>styled.div.attrs((props: ICellWrapperProps) => ({
  style: {
    gridRowStart: props.row,
    gridColumnStart: props.column,
    backgroundColor: props.isAxisCell ? '#DADADA' : '#FFFFFF',
  },
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #777;`;
