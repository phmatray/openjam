// @flow

import styled from 'styled-components';

const HoverSpan = styled.span`
  color: black;
  transition: color 100ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.primary};
  }
`;

export default HoverSpan;
