// @flow

import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

export const PlayPauseIcon = styled.div`
  width: 0;
  height: 37px;

  border-color: transparent transparent transparent rgba(0, 0, 0, 0.55);
  transition: 200ms all ease;
  border-style: ${props => (props.playing ? 'double' : 'solid')};
  border-width: ${props => (props.playing ? '0px 0 0px 30px' : '18.5px 0 18.5px 30px')};
`;

export const StyledButton = styled(Button)`
  width: 72px;
  height: 72px;

  &:hover ${PlayPauseIcon} {
    border-color: transparent transparent transparent rgba(0, 0, 0, 0.7);
  }

  &:active ${PlayPauseIcon} {
    border-color: transparent transparent transparent rgba(0, 0, 0, 0.8);
  }
`;
