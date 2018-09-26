import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPlaylist } from '../../redux/modules/playlist';
import Spinner from '../common/Spinner';
import PlaylistPresenter from './presenter';

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
    const { playlist, loading } = this.props.playlist;

    return playlist === null || playlist === undefined || loading ? (
      <Spinner />
    ) : (
      <PlaylistPresenter playlist={playlist} />
    );
  }
}

Playlist.propTypes = {
  fetchPlaylist: PropTypes.func.isRequired,
  playlist: PropTypes.object,
  loading: PropTypes.bool,
};

const mapStateToProps = state => ({
  playlist: state.playlist,
});

export default connect(
  mapStateToProps,
  { fetchPlaylist },
)(Playlist);
