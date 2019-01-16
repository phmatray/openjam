/* eslint-disable no-class-assign */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Spinner from '../components/Spinner';
import * as actions from '../actions/artists';
import { getVisibleArtists, getErrorMessage, getIsFetching } from '../reducers/data/artists';

import ArtistsPresenter from './artists/ArtistsPresenter';
import FetchError from './artists/FetchError';

class Artists extends PureComponent {
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

Artists.propTypes = {
  filter: PropTypes.oneOf(['all']).isRequired,
  errorMessage: PropTypes.string,
  artists: PropTypes.array.isRequired,
  isFetching: PropTypes.bool,
  fetchArtists: PropTypes.func.isRequired,
  toggleArtist: PropTypes.func.isRequired,
};

Artists.defaultProps = {
  isFetching: false,
  errorMessage: null,
};

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
