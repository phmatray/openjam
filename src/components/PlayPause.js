import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { playSelected, playTrack, pause } from '../redux/modules/player';

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

const mapStateToProps = state => ({
  collectionId: state.player.collectionId,
  playing: state.player.playing,
});

export default connect(
  mapStateToProps,
  { playSelected, playTrack, pause },
)(PlayPause);
