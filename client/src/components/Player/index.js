import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  updatePlaylist,
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
    const { fetchTracksRandom, updatePlaylist } = this.props;

    fetchTracksRandom().then(() => {
      const { tracks } = this.props;
      updatePlaylist(tracks);
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
            onLoading={({ bytesLoaded, bytesTotal }) => {
              console.log(`${(bytesLoaded / bytesTotal) * 100}% loaded`);
            }}
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
  updatePlaylist: PropTypes.func.isRequired,
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

  playlist: state.player.playlist,
  playing: state.player.playing,
  current: state.player.current,
  audioInfo: state.player.audioInfo,
  status: state.player.status,
});

export default connect(
  mapStateToProps,
  { fetchTracksRandom, updatePlaylist, updateAudioInfo, play, pause, previous, next },
)(PlayerContainer);
