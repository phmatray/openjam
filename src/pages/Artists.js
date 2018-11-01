import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchArtists } from '../redux/modules/artist';
import Spinner from '../components/Spinner';
import ArtistsPresenter from './artists/ArtistsPresenter';

class Artists extends Component {
  componentDidMount() {
    this.props.fetchArtists();
  }

  render() {
    const { artists, loading } = this.props;

    if (artists === null || loading) {
      return <Spinner />;
    }
    if (artists.length === 0) {
      return <h4>No artists found...</h4>;
    }
    return <ArtistsPresenter artists={artists} />;
  }
}

Artists.propTypes = {
  fetchArtists: PropTypes.func.isRequired,
  artists: PropTypes.array,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  artists: state.artist.artists,
  loading: state.artist.loading,
});

export default connect(
  mapStateToProps,
  { fetchArtists },
)(Artists);
