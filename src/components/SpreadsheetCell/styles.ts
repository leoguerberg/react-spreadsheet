import styled from 'styled-components';

import { ISpreadsheetCellWrapperProps } from './types';

export const Wrapper = styled.div<ISpreadsheetCellWrapperProps>`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Label = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  text-align: left;
`;

export const Input = styled.input`
  width: 144px;
  height: 24px;
  border: 2px solid #0091d5;
`;
