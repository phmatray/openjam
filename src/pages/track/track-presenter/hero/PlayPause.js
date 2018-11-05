import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { playTrack, pause } from '../../../../redux/modules/player';
import { PlayPauseIcon, StyledButton } from './play-pause/Atoms';

const PlayPause = ({ track, collectionId, playing, playTrack, pause }) => {
  const trackIsPlaying = playing && track._id === collectionId;

  return (
    <StyledButton circular onClick={() => (trackIsPlaying ? pause() : playTrack(track))}>
      <PlayPauseIcon playing={trackIsPlaying} />
    </StyledButton>
  );
};

PlayPause.propTypes = {
  playTrack: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  track: PropTypes.object.isRequired,
  collectionId: PropTypes.string,
  playing: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  collectionId: state.player.collectionId,
  playing: state.player.playing,
});

export default connect(
  mapStateToProps,
  { playTrack, pause },
)(PlayPause);
