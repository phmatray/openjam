// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { fetchAlbums, selectAlbums, selectIsFetching } from 'store/modules/data/albums';
import Spinner from 'views/components/Spinner';
import type { AlbumBasic } from 'lib/types';

import Presenter from './Albums.presenter';

type Props = {
  fetchAlbums: () => void,
  albums?: AlbumBasic[],
  loading: boolean,
};

class Albums extends PureComponent<Props> {
  static defaultProps = {
    albums: null,
  };

  componentDidMount() {
    this.props.fetchAlbums();
  }

  render() {
    const { albums, loading } = this.props;

    if (albums === null || albums === undefined || loading) {
      return <Spinner />;
    }
    if (albums.length === 0) {
      return <h4>No albums found...</h4>;
    }
    return <Presenter albums={albums} />;
  }
}

const mapStateToProps = state => ({
  albums: selectAlbums(state),
  loading: selectIsFetching(state),
});

export default connect(
  mapStateToProps,
  { fetchAlbums },
)(Albums);
