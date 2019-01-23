// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Spinner from 'views/components/Spinner';
import { fetchPlaylists, selectPlaylists, selectIsFetching } from 'store/modules/data/playlists';
import type { PlaylistBasic } from 'lib/types';

import Presenter from './Playlists.presenter';

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
    return <Presenter playlists={playlists} />;
  }
}

const mapStateToProps = state => ({
  playlists: selectPlaylists(state),
  loading: selectIsFetching(state),
});

export default connect(
  mapStateToProps,
  { fetchPlaylists },
)(Playlists);
