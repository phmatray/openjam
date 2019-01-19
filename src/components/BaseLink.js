// @flow

import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BaseLink = styled(Link)`
  transition: color 100ms ease-in-out;

  &:hover {
    color: ${props => props.theme.primary};
  }
`;

export default BaseLink;
