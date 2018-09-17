import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePlaylist, play, pause, previous, next } from '../../redux/modules/player';
import { fetchTracks } from '../../redux/modules/track';
import Player from './presenter';

class PlayerContainer extends Component {
  componentDidMount() {
    const { fetchTracks, updatePlaylist } = this.props;

    fetchTracks().then(() => {
      const { tracks } = this.props;
      updatePlaylist(tracks);
    });
  }

  render() {
    return <Player {...this.props} />;
  }
}

const mapStateToProps = state => ({
  playing: state.player.playing,
  current: state.player.current,
  audioInfo: state.player.audioInfo,
  tracks: state.track.tracks,
});

export default connect(
  mapStateToProps,
  { fetchTracks, updatePlaylist, play, pause, previous, next },
)(PlayerContainer);
