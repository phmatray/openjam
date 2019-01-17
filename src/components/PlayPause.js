// @flow

import React from 'react';
import { connect } from 'react-redux';

import {
  playSelected,
  playTrack,
  actions,
  getCollectionId,
  getPlaying,
} from '../reducers/ui/player';

import { PlayPauseIcon, StyledButton } from './play-pause/Atoms';

type Props = {
  playSelected: () => void,
  playTrack: () => void,
  pause: () => void,
  entity: {
    _id: string,
    type: 'track' | 'playlist' | 'album',
  },
  playing: boolean,
  collectionId?: string,
};

const PlayPause = ({ entity, collectionId, playing, playSelected, playTrack, pause }: Props) => {
  const trackIsPlaying = playing && entity._id === collectionId;

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

PlayPause.defaultProps = {
  collectionId: null,
};

const mapStateToProps = state => ({
  collectionId: getCollectionId(state),
  playing: getPlaying(state),
});

export default connect(
  mapStateToProps,
  { playSelected, playTrack, pause: actions.pause },
)(PlayPause);
