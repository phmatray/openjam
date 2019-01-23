// @flow

import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  min-height: 20vh;
  width: 350px;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0);
  transition: background-color 0.2s linear;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export default Content;
