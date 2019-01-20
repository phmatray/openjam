// @flow
/* eslint-disable no-class-assign */

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Spinner from '../components/Spinner';
import * as actions from '../actions/data/artists';
import { getVisibleArtists, getErrorMessage, getIsFetching } from '../reducers/data/artists';
import type { ArtistFilter, ArtistBasic } from '../types';

import ArtistsPresenter from './artists/ArtistsPresenter';
import FetchError from './artists/FetchError';

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

    return <ArtistsPresenter artists={artists} />;
  }
}

const mapStateToProps = (state, { match: { params } }) => {
  const filter = params.filter || 'all';
  return {
    isFetching: getIsFetching(state, filter),
    errorMessage: getErrorMessage(state, filter),
    artists: getVisibleArtists(state, filter),
    filter,
  };
};

Artists = withRouter(
  connect(
    mapStateToProps,
    actions,
  )(Artists),
);

export default Artists;
