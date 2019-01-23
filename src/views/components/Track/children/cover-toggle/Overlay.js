// @flow

import styled from 'styled-components';

const Overlay = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: #0006;
  opacity: 0;
  transition: 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default Overlay;
