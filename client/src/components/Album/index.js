import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchAlbum } from '../../redux/modules/album';
import Spinner from '../common/Spinner';

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

    let trackContent;

    if (album === null || loading || Object.keys(album).length === 0) {
      trackContent = <Spinner />;
    } else {
      trackContent = (
        <React.Fragment>
          <Header as="h1">{album.name}</Header>
        </React.Fragment>
      );
    }

    return <Segment basic>{trackContent}</Segment>;
  }
}

Album.propTypes = {
  fetchAlbum: PropTypes.func.isRequired,
  album: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  album: state.album,
});

export default connect(
  mapStateToProps,
  { fetchAlbum },
)(Album);
