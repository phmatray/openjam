// @flow

import styled from 'styled-components';

const Scrollable = styled.div`
  overflow-x: scroll;
  padding-bottom: 16px;

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);
    border-radius: 0;
  }
`;

export default Scrollable;
