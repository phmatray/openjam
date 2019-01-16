import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Spinner from '../components/Spinner';
import { fetchPlaylist, getPlaylist, getLoading } from '../reducers/data/playlist';
import { getPlaying, getCollection, getCurrent } from '../reducers/ui/player';

import PlaylistPresenter from './playlist/PlaylistPresenter';

class Playlist extends PureComponent {
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
  loading: PropTypes.bool.isRequired,

  playing: PropTypes.bool,
  playlistId: PropTypes.string,
  currentId: PropTypes.string,
};

Playlist.defaultProps = {
  playlist: null,
  playing: false,
  playlistId: null,
  currentId: null,
};

const mapStateToProps = state => ({
  playlist: getPlaylist(state),
  loading: getLoading(state),

  playing: getPlaying(state),
  collection: getCollection(state),
  current: getCurrent(state),
});

export default connect(
  mapStateToProps,
  { fetchPlaylist },
)(Playlist);
