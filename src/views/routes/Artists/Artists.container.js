// @flow
/* eslint-disable no-class-assign */

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Spinner from 'views/components/Spinner';
import {
  fetchArtists,
  selectArtists,
  selectErrorMessage,
  selectIsFetching,
} from 'store/modules/data/artists';
import type { ArtistFilter, ArtistBasic } from 'lib/types';

import Presenter from './Artists.presenter';
import FetchError from './children/FetchError';

type Props = {
  filter: ArtistFilter,
  errorMessage?: string,
  artists: ArtistBasic[],
  isFetching?: boolean,
  fetchArtists: (filter: ArtistFilter) => void,
};

class Artists extends PureComponent<Props> {
  static defaultProps = {
    isFetching: false,
    errorMessage: null,
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    const { filter, fetchArtists } = this.props;
    fetchArtists(filter);
  }

  render() {
    const { isFetching, errorMessage, artists } = this.props;
    if (isFetching && !artists.length) {
      return <Spinner />;
    }
    if (errorMessage && !artists.length) {
      return <FetchError message={errorMessage} onRetry={() => this.fetchData()} />;
    }

    return <Presenter artists={artists} />;
  }
}

const mapStateToProps = (state, { match: { params } }) => {
  const filter = params.filter || 'all';
  return {
    isFetching: selectIsFetching(state, filter),
    errorMessage: selectErrorMessage(state, filter),
    artists: selectArtists(state, filter),
    filter,
  };
};

Artists = withRouter(
  connect(
    mapStateToProps,
    { fetchArtists },
  )(Artists),
);

export default Artists;
