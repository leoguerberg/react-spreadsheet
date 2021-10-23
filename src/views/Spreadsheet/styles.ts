import styled, { css } from 'styled-components';

import { ICellWrapperProps } from './types';

export const SpreadsheetWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(24, 1fr);
  grid-template-rows: 30px repeat(24, 30px);
`;

export const CellWrapper = styled.div<ICellWrapperProps>`
  grid-row-start: ${(props) => props.row};
  grid-column-start: ${(props) => props.column};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #777;
  ${props => props.isAxisCell && css`
    background-color: lightgray;
  `}
`;
