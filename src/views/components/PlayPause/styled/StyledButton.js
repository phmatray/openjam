// @flow

import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

import PlayPauseIcon from './PlayPauseIcon';

const StyledButton = styled(Button)`
  width: 72px;
  height: 72px;

  &:hover ${PlayPauseIcon} {
    border-color: transparent transparent transparent rgba(0, 0, 0, 0.7);
  }

  &:active ${PlayPauseIcon} {
    border-color: transparent transparent transparent rgba(0, 0, 0, 0.8);
  }
`;

export default StyledButton;
