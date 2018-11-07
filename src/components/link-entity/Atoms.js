import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Alternate = styled.p`
  margin-bottom: 0em;
  font-family: Comfortaa, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-weight: 700;
`;

export const AlternateEdit = styled.span`
  font-family: Comfortaa, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-size: 0.8em;
  font-style: italic;
  font-weight: 400;
  color: #ccc;
`;

/* No export this one (it's the base ;-)) */
const BaseLink = styled(Link)`
  transition: color 100ms ease-in-out;

  &:hover {
    color: ${props => props.theme.primary};
  }
`;

export const InvertedLink = styled(BaseLink)`
  color: white;
`;

export const TableLink = styled(BaseLink)`
  color: black;
`;
