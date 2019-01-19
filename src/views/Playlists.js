// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Spinner from '../components/Spinner';
import { fetchPlaylists, getPlaylists, getLoading } from '../reducers/data/playlist';
import type { PlaylistBasic } from '../types';

import PlaylistsPresenter from './playlists/PlaylistsPresenter';

type Props = {
  fetchPlaylists: () => void,
  loading: boolean,
  playlists?: PlaylistBasic[],
};

class Playlists extends PureComponent<Props> {
  static defaultProps = {
    playlists: null,
  };

  componentDidMount() {
    this.props.fetchPlaylists();
  }

  render() {
    const { playlists, loading } = this.props;

    if (playlists === null || playlists === undefined || loading) {
      return <Spinner />;
    }
    if (playlists.length === 0) {
      return <h4>No playlists found...</h4>;
    }
    return <PlaylistsPresenter playlists={playlists} />;
  }
}

const mapStateToProps = state => ({
  playlists: getPlaylists(state),
  loading: getLoading(state),
});

export default connect(
  mapStateToProps,
  { fetchPlaylists },
)(Playlists);
