import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchAlbum } from '../../redux/modules/album';
import Moment from 'react-moment';
import Spinner from '../common/Spinner';
import LinkTrack from '../../elements/Links/LinkTrack';
import Body from '../../elements/UI/Body';
import H2 from '../../elements/Titles/H2';

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

    let trackContent =
      album === null || loading || Object.keys(album).length === 0 ? (
        <Spinner />
      ) : (
        <React.Fragment>
          <p>
            EP release date : <Moment format="LL">{album.release_date}</Moment>
          </p>
          <Image src={album.images[1].href} alt={album.title} />

          <H2 header="Tracks" />
          {album.tracks.map(track => (
            <p>
              <LinkTrack track={track} />
            </p>
          ))}
        </React.Fragment>
      );

    return <Body header={['Albums', album.name]}>{trackContent}</Body>;
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
