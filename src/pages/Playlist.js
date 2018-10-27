import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPlaylist } from '../redux/modules/playlist';
import { playSelected, pause } from '../redux/modules/player';
import Spinner from '../elements/UI/Spinner';
import PlaylistPresenter from './playlist/PlaylistPresenter';

class Playlist extends Component {
  state = {
    playlistId: null,
  };

  componentWillReceiveProps(newProps) {
    var params = newProps.match.params;

    if (params.id !== this.state.playlistId)
      this.setState({ playlistId: params.id }, () =>
        this.props.fetchPlaylist(this.state.playlistId),
      );
  }

  componentDidMount() {
    this.setState({ playlistId: this.props.match.params.id }, () =>
      this.props.fetchPlaylist(this.state.playlistId),
    );
  }

  render() {
    const { playlist, loading } = this.props;

    return playlist === null || playlist === undefined || loading ? (
      <Spinner />
    ) : (
      <PlaylistPresenter {...this.props} />
    );
  }
}

Playlist.propTypes = {
  fetchPlaylist: PropTypes.func.isRequired,
  playSelected: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,

  playlist: PropTypes.object,
  loading: PropTypes.bool,

  playing: PropTypes.bool,
  playlistId: PropTypes.string,
  currentId: PropTypes.string,
};

const mapStateToProps = state => ({
  playlist: state.playlist.playlist,
  loading: state.playlist.loading,

  playing: state.player.playing,
  collection: state.player.collection,
  current: state.player.current,
});

export default connect(
  mapStateToProps,
  { fetchPlaylist, playSelected, pause },
)(Playlist);
