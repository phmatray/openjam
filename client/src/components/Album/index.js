import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAlbum } from '../../redux/modules/album';
import AlbumPresenter from './presenter';

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
    return <AlbumPresenter album={album} loading={loading} />;
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
