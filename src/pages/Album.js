import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAlbum } from '../redux/modules/album';
import Spinner from '../components/Spinner';
import AlbumPresenter from './album/AlbumPresenter';

class Album extends Component {
  state = {
    albumId: null,
  };

  componentWillReceiveProps(newProps) {
    var params = newProps.match.params;

    if (params.id !== this.state.albumId)
      this.setState({ albumId: params.id }, () => this.props.fetchAlbum(this.state.albumId));
  }

  componentDidMount() {
    this.setState({ albumId: this.props.match.params.id }, () =>
      this.props.fetchAlbum(this.state.albumId),
    );
  }

  render() {
    const { album, loading } = this.props.album;

    return album === null || album === undefined || loading ? (
      <Spinner />
    ) : (
      <AlbumPresenter album={album} />
    );
  }
}

Album.propTypes = {
  fetchAlbum: PropTypes.func.isRequired,
  album: PropTypes.object.isRequired,
  loading: PropTypes.bool,
};

const mapStateToProps = state => ({
  album: state.album,
});

export default connect(
  mapStateToProps,
  { fetchAlbum },
)(Album);
