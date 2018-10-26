import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  loadCollection,
  play,
  pause,
  previous,
  next,
  updateAudioInfo,
} from '../../redux/modules/player';
import { fetchTracksRandom } from '../../redux/modules/track';
import Player from './presenter';
import Sound from 'react-sound';

class PlayerContainer extends Component {
  componentDidMount() {
    const { fetchTracksRandom, loadCollection } = this.props;

    fetchTracksRandom().then(() => {
      const { tracks } = this.props;
      loadCollection(tracks);
    });
  }

  setAudioInfo = ({ position, duration, volume }) => {
    const { updateAudioInfo } = this.props;
    updateAudioInfo({ position, duration, volume });
  };

  render() {
    const { current, status, audioInfo, next } = this.props;

    return (
      current !== null && (
        <React.Fragment>
          <Sound
            url={current.audiourl}
            playStatus={status}
            position={audioInfo.position}
            loop={false}
            onPlaying={this.setAudioInfo}
            onFinishedPlaying={next}
          />
          <Player {...this.props} />
        </React.Fragment>
      )
    );
  }
}

PlayerContainer.propTypes = {
  fetchTracksRandom: PropTypes.func.isRequired,

  loadCollection: PropTypes.func.isRequired,
  updateAudioInfo: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  current: PropTypes.shape({
    audiourl: PropTypes.string.isRequired,
  }),
  status: PropTypes.oneOf(['PLAYING', 'PAUSED', 'STOPPED']).isRequired,
  audioInfo: PropTypes.shape({
    position: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
  }),
};

PlayerContainer.defaultProps = {
  current: null,
};

const mapStateToProps = state => ({
  tracks: state.track.tracks,

  fetchTracksRandom: PropTypes.func.isRequired,
  loadCollection: PropTypes.func.isRequired,
  updateAudioInfo: PropTypes.func.isRequired,
  play: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,

  playlist: state.player.playlist,
  playing: state.player.playing,
  current: state.player.current,
  audioInfo: state.player.audioInfo,
  status: state.player.status,
});

export default connect(
  mapStateToProps,
  { fetchTracksRandom, loadCollection, updateAudioInfo, play, pause, previous, next },
)(PlayerContainer);
