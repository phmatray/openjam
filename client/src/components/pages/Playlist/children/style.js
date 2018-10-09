import styled from 'styled-components';
import { Table, Icon as SemanticIcon } from 'semantic-ui-react';

export const HeaderCell = styled(Table.HeaderCell)`
  text-transform: uppercase !important;
  color: #666 !important;
  font-weight: 400 !important;
  padding-bottom: 0.3em !important;
`;

export const CoverCell = styled('img')`
  display: block;
  width: 100%;
  height: auto;
`;

export const Overlay = styled('div')`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #0006;
  opacity: 0;
  transition: 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled(Table.Cell)`
  position: relative;
  display: flex;
  padding: 0.2em 0 !important;
  width: 3em;
  height: 3em;
  border-radius: 5%;
`;

export const Row = styled(Table.Row)`
  &:hover ${Wrapper} ${Overlay} {
    opacity: 1;
  }
`;

export const Icon = styled(SemanticIcon)`
  width: 50px;
  height: 50px;
`;
