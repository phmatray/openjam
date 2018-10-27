import styled from 'styled-components';

const HoverSpan = styled.span`
  color: black;
  transition: color 100ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: #00b5ad;
  }
`;

export default HoverSpan;
