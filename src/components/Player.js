import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Sound from 'react-sound';

import { fetchTracks, actions } from '../redux/modules/player';

import PlayerPresenter from './player/PlayerPresenter';

class Player extends Component {
  async componentDidMount() {
    const { fetchTracks, loadCollection } = this.props;
    await fetchTracks();

    const { tracks } = this.props;

    // Select 20 tracks randomly
    const randomly = [];
    for (let index = 0; index < 20; index += 1) {
      const track = tracks[Math.floor(Math.random() * tracks.length)];
      randomly.push(track);
    }

    loadCollection(randomly);
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
          <PlayerPresenter {...this.props} />
        </React.Fragment>
      )
    );
  }
}

Player.propTypes = {
  fetchTracks: PropTypes.func.isRequired,
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

Player.defaultProps = {
  current: null,
  audioInfo: null,
};

const mapStateToProps = state => ({
  tracks: state.player.tracks,
  playlist: state.player.playlist,
  playing: state.player.playing,
  current: state.player.current,
  audioInfo: state.player.audioInfo,
  status: state.player.status,
});

export default connect(
  mapStateToProps,
  { fetchTracks, ...actions },
)(Player);
