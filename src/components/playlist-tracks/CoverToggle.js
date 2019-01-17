// @flow

import React from 'react';

import { Wrapper, Cover, Overlay, Icon } from './cover-toggle/Atoms';

type Playlist = {};

type Track = {
  _id: string,
  title: string,
  coverurl: {
    w200: string,
  },
};

type Props = {
  playSelected: (playlist: Playlist, track: Track) => void,
  pause: () => void,
  playlist: Playlist,
  track: Track,
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
