import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  playSelected,
  playTrack,
  actions,
  getCollectionId,
  getPlaying,
} from '../reducers/ui/player';

import { PlayPauseIcon, StyledButton } from './play-pause/Atoms';

const PlayPause = ({ entity, collectionId, playing, playSelected, playTrack, pause }) => {
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

PlayPause.propTypes = {
  playTrack: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  entity: PropTypes.object.isRequired,
  collectionId: PropTypes.string,
  playing: PropTypes.bool.isRequired,
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
