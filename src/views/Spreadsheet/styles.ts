import styled from 'styled-components';

import { ICellWrapperProps } from './types';

export const SpreadsheetWrapper = styled.div`
  display: grid;
  grid-template-columns: 30px repeat(23, 150px);
  grid-template-rows: 30px repeat(23, 30px);
  overflow: auto;
`;

export const CellWrapper = <any>styled.div.attrs((props:ICellWrapperProps) => ({
  style: {
    gridRowStart: props.row,
    gridColumnStart: props.column,
    backgroundColor: props.isAxisCell ? 'lightgray':'white'
  }
}))
` 
 display: flex;
 align-items: center;
 justify-content: center;
 border: 1px solid #777;
`; 