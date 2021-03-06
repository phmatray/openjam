import React from 'react';
import { ThemeConsumer } from 'styled-components';
import PropTypes from 'prop-types';

import { Wrapper, Cover, Overlay, Icon } from './cover-toggle/Atoms';

const CoverToggle = ({ playTrack, pause, track, isActive, isNew, playerPlaying }) => {
  const showPause = playerPlaying && isActive;

  return (
    <ThemeConsumer>
      {theme => (
        <Wrapper>
          <Cover
            src={track.coverurl.w200}
            alt={track.title}
            label={
              isNew && { corner: 'left', icon: 'time', size: 'mini', color: theme.primarySemantic }
            }
          />
          <Overlay onClick={() => (showPause ? pause() : playTrack(track))}>
            <Icon
              name={`${showPause ? 'pause' : 'play'} circle outline`}
              inverted
              color="grey"
              size="large"
              style={{ marginRight: 0 }}
            />
          </Overlay>
        </Wrapper>
      )}
    </ThemeConsumer>
  );
};

CoverToggle.propTypes = {
  playTrack: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  track: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    coverurl: PropTypes.shape({
      w200: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  isNew: PropTypes.bool,
  playerPlaying: PropTypes.bool.isRequired,
};

CoverToggle.defaultProps = {
  isNew: true,
};

export default CoverToggle;
