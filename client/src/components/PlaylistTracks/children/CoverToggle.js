import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Cover, Overlay, Icon } from '../styles';

const CoverToggle = ({ playSelected, pause, playlist, track, isActive, playerPlaying }) => {
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

CoverToggle.propTypes = {
  playSelected: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  playlist: PropTypes.object.isRequired,
  track: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    coverurl: PropTypes.shape({
      w200: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  playerPlaying: PropTypes.bool.isRequired,
};

export default CoverToggle;
