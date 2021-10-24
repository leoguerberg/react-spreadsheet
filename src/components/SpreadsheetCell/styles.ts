import styled from 'styled-components';

import { ISpreadsheetCellLabelProps, ISpreadsheetCellWrapperProps } from './types';

export const Wrapper = styled.div<ISpreadsheetCellWrapperProps>`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Label = styled.div<ISpreadsheetCellLabelProps>`
  display: flex;
  height: 100%;
  align-items: center;
  text-align: left;
  white-space: nowrap;
  ${(props) =>
    props.isError &&
    `
  color: red`}
`;

export const Input = styled.input`
  width: 144px;
  height: 24px;
  border-radius: 3px;
  border: 2px solid #0091d5;
`;
