import styled from 'styled-components';

const Item = styled.div`
  width: 170px;
  margin-bottom: 1.5em;
  margin-right: 0.9em;
  font-family: Ubuntu;

  &:hover {
    transform: scale3d(1.1, 1.1, 1.1);
    cursor: pointer;
  }
`;

export default Item;
