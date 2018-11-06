import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Spinner from '../components/Spinner';
import { fetchPlaylist } from '../redux/modules/playlist';

import PlaylistPresenter from './playlist/PlaylistPresenter';

class Playlist extends Component {
  state = {
    playlistId: null,
  };

  componentDidMount() {
    this.setState({ playlistId: this.props.match.params.id }, () =>
      this.props.fetchPlaylist(this.state.playlistId),
    );
  }

  componentWillReceiveProps(newProps) {
    const { params } = newProps.match;

    if (params.id !== this.state.playlistId)
      this.setState({ playlistId: params.id }, () =>
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
  { fetchPlaylist },
)(Playlist);
