// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sound from 'react-sound';

import { getTracks } from '../reducers/data/tracks';
import { getPlaying, getCurrent, getAudioInfo, getStatus } from '../reducers/ui/player';
import { play, pause, previous, next, updateTracks, updateAudioInfo } from '../actions/ui/player';
import PlayerPresenter from '../components/player/PlayerPresenter';
import type { AudioInfo, TrackBasic } from '../types';

type Props = {
  fetchTracks: () => void,
  updateTracks: (TrackBasic[]) => void,
  updateAudioInfo: AudioInfo => void,
  next: () => void,
  tracks: { byId: any, listByFilter: { all: { ids: string[] } } },
  status: 'PLAYING' | 'PAUSED' | 'STOPPED',
  current?: TrackBasic,
  audioInfo?: AudioInfo,
};

class Player extends Component<Props> {
  static defaultProps = {
    current: null,
    audioInfo: null,
  };

  componentDidMount() {
    this.reset();
  }

  componentDidUpdate(prevProps) {
    if (this.props.tracks.byId !== prevProps.tracks.byId) {
      this.reset();
    }
  }

  reset = () => {
    const { updateTracks, tracks } = this.props;

    if (tracks.listByFilter.all.ids.length > 0) {
      // Select 20 track ids randomly
      const randomly = [];
      const { ids } = tracks.listByFilter.all;
      for (let index = 0; index < 20; index += 1) {
        const track = ids[Math.floor(Math.random() * ids.length)];
        randomly.push(track);
      }

      const randomTracks = randomly.map(id => tracks.byId[id]);
      updateTracks(randomTracks);
    }
  };

  setAudioInfo = ({ position, duration, volume }: AudioInfo) => {
    const { updateAudioInfo } = this.props;
    updateAudioInfo({ position, duration, volume });
  };

  render() {
    const { current, status, audioInfo, next } = this.props;

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
            onFinishedPlaying={next}
          />
          <PlayerPresenter {...this.props} />
        </React.Fragment>
      )
    );
  }
}

const mapStateToProps = state => ({
  tracks: getTracks(state),
  playing: getPlaying(state),
  current: getCurrent(state),
  audioInfo: getAudioInfo(state),
  status: getStatus(state),
});

export default connect(
  mapStateToProps,
  { play, pause, previous, next, updateTracks, updateAudioInfo },
)(Player);
