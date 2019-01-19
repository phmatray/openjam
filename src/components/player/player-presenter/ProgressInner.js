// @flow

import styled from 'styled-components';

const ProgressInner = styled.div`
  width: ${props => (props.value ? `${props.value}%` : 0)};
  height: 100%;
  background-color: ${props => props.theme.primary};
  transition: width 0.2s ease-in;
`;

export default ProgressInner;
