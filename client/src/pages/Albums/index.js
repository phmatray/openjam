import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAlbums } from '../../redux/modules/album';
import Spinner from '../../elements/UI/Spinner';
import AlbumsPresenter from './presenter';

class Albums extends Component {
  componentDidMount() {
    this.props.fetchAlbums();
  }

  render() {
    const { albums, loading } = this.props;

    return albums === null || loading ? (
      <Spinner />
    ) : albums.length > 0 ? (
      <AlbumsPresenter albums={albums} />
    ) : (
      <h4>No albums found...</h4>
    );
  }
}

Albums.propTypes = {
  fetchAlbums: PropTypes.func.isRequired,
  albums: PropTypes.array,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  albums: state.album.albums,
  loading: state.album.loading,
});

export default connect(
  mapStateToProps,
  { fetchAlbums },
)(Albums);
