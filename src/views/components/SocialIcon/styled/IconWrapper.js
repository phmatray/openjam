// @flow

import styled from 'styled-components';

const IconWrapper = styled.span`
  background-color: ${props => props.color};
  width: 3em;
  height: 3em;
  color: white;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 10em;
  border: 0 solid ${props => props.color};
  transition: border 0.2s ease-in-out;

  &:hover {
    border: 0.3em solid #fff6;
    color: white;
  }
`;

export default IconWrapper;
