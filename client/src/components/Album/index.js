import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment, Header, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchAlbum } from '../../redux/modules/album';
import Moment from 'react-moment';
import Spinner from '../common/Spinner';
import LinkTrack from '../../elements/Links/LinkTrack';

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
          <p>
            EP release date : <Moment format="LL">{album.release_date}</Moment>
          </p>
          <Image src={album.images[1].href} alt={album.title} />

          <Header as="h1">Tracks</Header>
          {album.tracks.map(track => (
            <p>
              <LinkTrack track={track} />
            </p>
          ))}
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
    release_date: PropTypes.string.isRequired,
    tracks: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
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
