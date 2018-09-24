import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchArtist } from '../../redux/modules/artist';
import Spinner from '../common/Spinner';
import ArtistPresenter from './presenter';

class Artist extends Component {
  state = {
    artistId: null,
  };

  componentWillReceiveProps(newProps) {
    var params = newProps.match.params;

    if (params.id !== this.state.artistId)
      this.setState({ artistId: params.id }, () => this.props.fetchArtist(this.state.artistId));
  }

  componentDidMount() {
    this.setState({ artistId: this.props.match.params.id }, () =>
      this.props.fetchArtist(this.state.artistId),
    );
  }

  render() {
    const { artist, loading } = this.props.artist;

    return artist === null || artist === undefined || loading ? (
      <Spinner />
    ) : (
      <ArtistPresenter artist={artist} />
    );
  }
}

Artist.propTypes = {
  fetchArtist: PropTypes.func.isRequired,
  artist: PropTypes.object,
  loading: PropTypes.bool,
};

const mapStateToProps = state => ({
  artist: state.artist,
});

export default connect(
  mapStateToProps,
  { fetchArtist },
)(Artist);
