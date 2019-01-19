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

import PlayPauseIcon from '../components/play-pause/PlayPauseIcon';
import StyledButton from '../components/play-pause/StyledButton';

type Entity = {
  _id: string,
  type: 'track' | 'playlist' | 'album',
};

type Props = {
  playSelected: (entity: Entity) => void,
  playTrack: (entity: Entity) => void,
  pause: () => void,
  entity: Entity,
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
