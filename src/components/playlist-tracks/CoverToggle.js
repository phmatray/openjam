// @flow

import React from 'react';

import type { PlaylistBasic, TrackBasic } from '../../types';

import Wrapper from './cover-toggle/Wrapper';
import Cover from './cover-toggle/Cover';
import Overlay from './cover-toggle/Overlay';
import Icon from './cover-toggle/Icon';

type Props = {
  playSelected: (playlist: PlaylistBasic, track: TrackBasic) => void,
  pause: () => void,
  playlist: PlaylistBasic,
  track: TrackBasic,
  isActive: boolean,
  playerPlaying: boolean,
};

const CoverToggle = ({ playSelected, pause, playlist, track, isActive, playerPlaying }: Props) => {
  const showPause = playerPlaying && isActive;

  return (
    <Wrapper>
      <Cover
        src={track.coverurl.w200}
        style={{ width: '3em', height: '3em', borderRadius: '5%' }}
        alt={track.title}
      />
      <Overlay onClick={() => (showPause ? pause() : playSelected(playlist, track))}>
        <Icon
          name={`${showPause ? 'pause' : 'play'} circle outline`}
          inverted
          color="grey"
          size="large"
          style={{ marginRight: 0 }}
        />
      </Overlay>
    </Wrapper>
  );
};

export default CoverToggle;
