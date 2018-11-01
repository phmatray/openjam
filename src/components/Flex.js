import styled from 'styled-components';
import PropTypes from 'prop-types';
import { is } from '../utils/ifStyled';
import Div from './Div';

const Flex = styled(Div)`
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

  ${is('wrap')`
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

Flex.propTypes = {
  fluid: PropTypes.bool,
  inline: PropTypes.bool,
  row: PropTypes.bool,
  rowReverse: PropTypes.bool,
  column: PropTypes.bool,
  columnReverse: PropTypes.bool,
  nowrap: PropTypes.bool,
  wrap: PropTypes.bool,
  wrapReverse: PropTypes.bool,
  justifyStart: PropTypes.bool,
  justifyEnd: PropTypes.bool,
  justifyCenter: PropTypes.bool,
  justifyBetween: PropTypes.bool,
  justifyAround: PropTypes.bool,
  contentStart: PropTypes.bool,
  contentEnd: PropTypes.bool,
  contentCenter: PropTypes.bool,
  contentSpaceBetween: PropTypes.bool,
  contentSpaceAround: PropTypes.bool,
  contentStretch: PropTypes.bool,
  alignStart: PropTypes.bool,
  alignEnd: PropTypes.bool,
  alignCenter: PropTypes.bool,
  alignBaseline: PropTypes.bool,
  alignStretch: PropTypes.bool,
  full: PropTypes.bool,
  center: PropTypes.bool,
};

export default Flex;
