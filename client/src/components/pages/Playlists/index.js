import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPlaylists } from '../../../redux/modules/playlist';
import Spinner from '../../../elements/UI/Spinner';
import PlaylistsPresenter from './presenter';

class Playlists extends Component {
  componentDidMount() {
    this.props.fetchPlaylists();
  }

  render() {
    const { playlists, loading } = this.props;

    return playlists === null || loading ? (
      <Spinner />
    ) : playlists.length > 0 ? (
      <PlaylistsPresenter playlists={playlists} />
    ) : (
      <h4>No playlists found...</h4>
    );
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
