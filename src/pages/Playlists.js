import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPlaylists } from '../redux/modules/playlist';
import Spinner from '../components/Spinner';
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

const mapStateToProps = state => ({
  playlists: state.playlist.playlists,
  loading: state.playlist.loading,
});

export default connect(
  mapStateToProps,
  { fetchPlaylists },
)(Playlists);
