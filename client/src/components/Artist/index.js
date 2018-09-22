import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchArtist } from '../../redux/modules/artist';
import Spinner from '../common/Spinner';

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

    let trackContent;

    if (artist === null || loading || Object.keys(artist).length === 0) {
      trackContent = <Spinner />;
    } else {
      trackContent = (
        <React.Fragment>
          <Header as="h1">{artist.name}</Header>
        </React.Fragment>
      );
    }

    return <Segment basic>{trackContent}</Segment>;
  }
}

Artist.propTypes = {
  fetchArtist: PropTypes.func.isRequired,
  artist: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  artist: state.artist,
});

export default connect(
  mapStateToProps,
  { fetchArtist },
)(Artist);
