import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAlbums } from '../redux/modules/album';
import Spinner from '../components/Spinner';
import AlbumsPresenter from './albums/AlbumsPresenter';

class Albums extends Component {
  componentDidMount() {
    this.props.fetchAlbums();
  }

  render() {
    const { albums, loading } = this.props;

    if (albums === null || loading) {
      return <Spinner />;
    }
    if (albums.length === 0) {
      return <h4>No albums found...</h4>;
    }
    return <AlbumsPresenter albums={albums} />;
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
