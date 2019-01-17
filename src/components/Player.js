// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sound from 'react-sound';

import {
  fetchTracks,
  actions,
  getTracks,
  getPlaylist,
  getPlaying,
  getCurrent,
  getAudioInfo,
  getStatus,
} from '../reducers/ui/player';

import PlayerPresenter from './player/PlayerPresenter';

type Props = {
  fetchTracks: () => void,
  loadCollection: () => void,
  updateAudioInfo: () => void,
  next: () => void,
  status: 'PLAYING' | 'PAUSED' | 'STOPPED',
  current?: { audiourl: string },
  audioInfo?: { position: number, duration: number, volume: number },
};

class Player extends Component<Props> {
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

Player.defaultProps = {
  current: null,
  audioInfo: null,
};

const mapStateToProps = state => ({
  tracks: getTracks(state),
  playlist: getPlaylist(state),
  playing: getPlaying(state),
  current: getCurrent(state),
  audioInfo: getAudioInfo(state),
  status: getStatus(state),
});

export default connect(
  mapStateToProps,
  { fetchTracks, ...actions },
)(Player);
