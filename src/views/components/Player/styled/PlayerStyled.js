// @flow

import styled from 'styled-components';

const PlayerStyled = styled.div`
  height: ${props => (props.height ? `${props.height}px` : '8em')};
  background-color: black;
  margin: 0;
  width: 100%;
`;

export default PlayerStyled;
