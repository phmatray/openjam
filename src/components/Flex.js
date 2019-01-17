// @flow

import type { ComponentType } from 'react';
import styled from 'styled-components';

import { is } from '../lib/utils/ifStyled';

import Div from './Div';

type Props = {
  fluid?: boolean,
  inline?: boolean,
  row?: boolean,
  rowReverse?: boolean,
  column?: boolean,
  columnReverse?: boolean,
  nowrap?: boolean,
  wrapBreak?: boolean,
  wrapReverse?: boolean,
  justifyStart?: boolean,
  justifyEnd?: boolean,
  justifyCenter?: boolean,
  justifyBetween?: boolean,
  justifyAround?: boolean,
  contentStart?: boolean,
  contentEnd?: boolean,
  contentCenter?: boolean,
  contentSpaceBetween?: boolean,
  contentSpaceAround?: boolean,
  contentStretch?: boolean,
  alignStart?: boolean,
  alignEnd?: boolean,
  alignCenter?: boolean,
  alignBaseline?: boolean,
  alignStretch?: boolean,
  center?: boolean,
};

const Flex: ComponentType<Props> = styled(Div)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;

  ${is('inline')`
    display: inline-flex;
  `};

  ${is('row')`
    flex-direction: row; /* default */
  `};

  ${is('rowReverse')`
    flex-direction: row-reverse;
  `};

  ${is('column')`
    flex-direction: column;
  `};

  ${is('columnReverse')`
    flex-direction: column-reverse;
  `};

  ${is('nowrap')`
    flex-wrap: nowrap; /* default */
  `};

  ${is('wrapBreak')`
    flex-wrap: wrap;
  `};

  ${is('wrapReverse')`
    flex-wrap: wrap-reverse;
  `};

  ${is('justifyStart')`
    justify-content: flex-start; /* default */
  `};

  ${is('justifyEnd')`
    justify-content: flex-end;
  `};

  ${is('justifyCenter')`
    justify-content: center;
  `};

  ${is('justifyBetween')`
    justify-content: space-between;
  `};

  ${is('justifyAround')`
    justify-content: space-around;
  `};

  ${is('contentStart')`
    align-content: flex-start;
  `};

  ${is('contentEnd')`
    align-content: flex-end;
  `};

  ${is('contentCenter')`
    align-content: center;
  `};

  ${is('contentSpaceBetween')`
    align-content: space-between;
  `};

  ${is('contentSpaceAround')`
    align-content: space-around;
  `};

  ${is('contentStretch')`
    align-content: stretch; /* default */
  `};

  ${is('alignStart')`
    align-items: flex-start;
  `};

  ${is('alignEnd')`
    align-items: flex-end;
  `};

  ${is('alignCenter')`
    align-items: center;
  `};

  ${is('alignBaseline')`
    align-items: baseline;
  `};

  ${is('alignStretch')`
    align-items: stretch;
  `};

  ${is('fluid')`
    width: 100%;
    height: 100%;
    flex-basis: 100%;
  `};

  ${is('center')`
    align-items: center;
    justify-content: center;
  `};
`;

export default Flex;
