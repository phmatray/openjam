import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchArtists } from '../../redux/modules/artist';
import Spinner from '../common/Spinner';
import ArtistsPresenter from './presenter';

class Artists extends Component {
  componentDidMount() {
    this.props.fetchArtists();
  }

  render() {
    const { artists, loading } = this.props;

    return artists === null || loading ? (
      <Spinner />
    ) : artists.length > 0 ? (
      <ArtistsPresenter artists={artists} />
    ) : (
      <h4>No artists found...</h4>
    );
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
