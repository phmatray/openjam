// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sound from 'react-sound';

import { selectTracks } from 'store/modules/data/tracks';
import {
  getPlaying,
  getCurrent,
  getAudioInfo,
  getStatus,
  play,
  pause,
  previousTrack,
  nextTrack,
  updateTracks,
  updateAudioInfo,
} from 'store/modules/ui/player';
import type { AudioInfo, TrackBasic } from 'lib/types';

import PlayerPresenter from './Player.presenter';

type Props = {
  fetchTracks: () => void,
  updateTracks: (TrackBasic[]) => void,
  updateAudioInfo: AudioInfo => void,
  previousTrack: () => void,
  nextTrack: () => void,
  tracks?: TrackBasic[],
  status?: 'PLAYING' | 'PAUSED' | 'STOPPED',
  current?: ?TrackBasic,
  audioInfo?: ?AudioInfo,
};

class Player extends Component<Props> {
  static defaultProps = {
    tracks: [],
    status: 'STOPPED',
    current: null,
    audioInfo: null,
  };

  componentDidMount() {
    this.reset();
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.tracks !== prevProps.tracks) {
      this.reset();
    }
  }

  reset = () => {
    const { updateTracks, tracks } = this.props;

    if (tracks !== null && tracks !== undefined && tracks.length > 0) {
      // Select 20 track ids randomly
      const randomTracks = [];
      for (let index = 0; index < 20; index += 1) {
        const track = tracks[Math.floor(Math.random() * tracks.length)];
        randomTracks.push(track);
      }
      updateTracks(randomTracks);
    }
  };

  setAudioInfo = ({ position, duration, volume }: AudioInfo) => {
    const { updateAudioInfo } = this.props;
    updateAudioInfo({ position, duration, volume });
  };

  render() {
    const { current, status, audioInfo, nextTrack } = this.props;

    return (
      current !== null &&
      current !== undefined &&
      audioInfo !== null &&
      audioInfo !== undefined && (
        <React.Fragment>
          <Sound
            url={current.audiourl}
            playStatus={status}
            position={audioInfo.position}
            loop={false}
            onPlaying={this.setAudioInfo}
            onFinishedPlaying={nextTrack}
          />
          <PlayerPresenter {...this.props} />
        </React.Fragment>
      )
    );
  }
}

const mapStateToProps = state => ({
  tracks: selectTracks(state),
  playing: getPlaying(state),
  current: getCurrent(state),
  audioInfo: getAudioInfo(state),
  status: getStatus(state),
});

export default connect(
  mapStateToProps,
  { play, pause, previousTrack, nextTrack, updateTracks, updateAudioInfo },
)(Player);
