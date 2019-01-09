import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchArtists, getArtists, getLoading } from '../redux/modules/artist';
import Spinner from '../components/Spinner';
import ArtistsPresenter from './artists/ArtistsPresenter';

class Artists extends Component {
  componentDidMount() {
    const { artists } = this.props;

    if (artists === null) {
      this.props.fetchArtists();
    }
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

Artists.defaultProps = {
  artists: null,
};

const mapStateToProps = state => ({
  artists: getArtists(state),
  loading: getLoading(state),
});

export default connect(
  mapStateToProps,
  { fetchArtists },
)(Artists);
