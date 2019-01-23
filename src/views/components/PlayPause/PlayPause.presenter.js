// @flow

import React from 'react';

import StyledButton from './styled/StyledButton';
import PlayPauseIcon from './styled/PlayPauseIcon';

type Props = {
  playAction: any,
  trackIsPlaying: boolean,
};

const PlayPause = ({ playAction, trackIsPlaying }: Props) => (
  <StyledButton circular onClick={playAction}>
    <PlayPauseIcon playing={trackIsPlaying} />
  </StyledButton>
);

export default PlayPause;
