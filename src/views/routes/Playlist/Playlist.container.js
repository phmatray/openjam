// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Spinner from 'views/components/Spinner';
// // import { selectPlaylist } from 'store/modules/ui/views/playlist.reducer';
// // import { fetchPlaylist, getLoading } from 'store/modules/ui/views/playlist.reducer';
import { getTracks, getPlaying, getCurrent } from 'store/modules/ui/player';
import type { PlaylistBasic } from 'lib/types';

import Presenter from './Playlist.presenter';

type Props = {
  fetchPlaylist: (playlistId: string) => void,
  match: { params: { id: string } },
  loading: boolean,
  playlist?: PlaylistBasic,
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
      <Presenter {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  // // playlist: selectPlaylist(state),
  // // loading: getLoading(state),
  playing: getPlaying(state),
  tracks: getTracks(state),
  current: getCurrent(state),
});

export default connect(
  mapStateToProps,
  // // { fetchPlaylist },
)(Playlist);
