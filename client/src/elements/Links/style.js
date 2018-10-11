import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TableLink = styled(Link)`
  color: black;
  transition: color 100ms ease-in-out;

  &:hover {
    color: #00b5ad;
  }
`;
