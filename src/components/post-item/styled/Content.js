// @flow

import styled from 'styled-components';

const Content = styled.div`
  margin-left: 48px;
  margin-top: 1em;
  transition: margin-left 0.3s ease;

  @media only screen and (max-width: 767px) {
    margin-left: 0;
  }
`;

export default Content;
