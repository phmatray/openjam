// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Spinner from '../components/Spinner';
import { fetchPlaylist, getPlaylist, getLoading } from '../reducers/data/playlist';
import { getPlaying, getCollection, getCurrent } from '../reducers/ui/player';

import PlaylistPresenter from './playlist/PlaylistPresenter';

type Props = {
  fetchPlaylist: (playlistId: string) => void,
  match: { params: { id: string } },
  loading: boolean,
  playlist?: {},
  playing?: boolean,
  playlistId?: string,
  currentId?: string,
};

type State = {
  playlistId: string,
};

class Playlist extends PureComponent<Props, State> {
  state = {
    playlistId: '',
  };

  static defaultProps = {
    playlist: null,
    playing: false,
    playlistId: null,
    currentId: null,
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
