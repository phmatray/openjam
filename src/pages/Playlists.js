import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Spinner from '../components/Spinner';
import { fetchPlaylists, getPlaylists, getLoading } from '../redux/modules/playlist';

import PlaylistsPresenter from './playlists/PlaylistsPresenter';

class Playlists extends Component {
  componentDidMount() {
    this.props.fetchPlaylists();
  }

  render() {
    const { playlists, loading } = this.props;

    if (playlists === null || loading) {
      return <Spinner />;
    }
    if (playlists.length === 0) {
      return <h4>No playlists found...</h4>;
    }
    return <PlaylistsPresenter playlists={playlists} />;
  }
}

Playlists.propTypes = {
  fetchPlaylists: PropTypes.func.isRequired,
  playlists: PropTypes.array,
  loading: PropTypes.bool.isRequired,
};

Playlists.defaultProps = {
  playlists: null,
};

const mapStateToProps = state => ({
  playlists: getPlaylists(state),
  loading: getLoading(state),
});

export default connect(
  mapStateToProps,
  { fetchPlaylists },
)(Playlists);
