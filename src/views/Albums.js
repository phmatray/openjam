// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { fetchAlbums } from '../actions/data/albums';
import { getAlbums, getIsFetching } from '../reducers/data/albums';
import Spinner from '../components/Spinner';
import type { AlbumBasic } from '../types';

import AlbumsPresenter from './albums/AlbumsPresenter';

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
    return <AlbumsPresenter albums={albums} />;
  }
}

const mapStateToProps = state => ({
  albums: getAlbums(state),
  loading: getIsFetching(state),
});

export default connect(
  mapStateToProps,
  { fetchAlbums },
)(Albums);
