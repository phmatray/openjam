// @flow

import React from 'react';
import { connect } from 'react-redux';

import { playSelected, playTrack, pause } from '../actions/ui/player';
import { getPlaying } from '../reducers/ui/player';
import PlayPauseIcon from '../components/play-pause/PlayPauseIcon';
import StyledButton from '../components/play-pause/StyledButton';
import type { AlbumBasic, PlaylistBasic, TrackBasic } from '../types';

type Entity = AlbumBasic | PlaylistBasic | TrackBasic;

type Props = {
  playSelected: (entity: Entity) => void,
  playTrack: (entity: Entity) => void,
  pause: () => void,
  entity: Entity,
  playing: boolean,
};

const PlayPause = ({ entity, playing, playSelected, playTrack, pause }: Props) => {
  const trackIsPlaying = playing;

  let playAction;
  if (entity.type === 'track') {
    playAction = () => (trackIsPlaying ? pause() : playTrack(entity));
  } else if (entity.type === 'playlist' || entity.type === 'album') {
    playAction = () => (trackIsPlaying ? pause() : playSelected(entity));
  } else {
    throw Error('unknow entity');
  }

  return (
    <StyledButton circular onClick={playAction}>
      <PlayPauseIcon playing={trackIsPlaying} />
    </StyledButton>
  );
};

const mapStateToProps = state => ({
  playing: getPlaying(state),
});

export default connect(
  mapStateToProps,
  { playSelected, playTrack, pause },
)(PlayPause);
