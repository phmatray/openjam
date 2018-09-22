import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchArtists } from '../../redux/modules/artist';
import { Segment, Header, Card } from 'semantic-ui-react';
import ArtistItems from './presenter';

class Artists extends Component {
  componentDidMount() {
    this.props.fetchArtists();
  }

  render() {
    const { artists, loading } = this.props;

    return (
      <Segment basic>
        <Header as="h1">
          Artists
          <Header.Subheader>Pick some music by title, artist, remix or label.</Header.Subheader>
        </Header>

        {artists !== null && (
          <Card.Group itemsPerRow={3}>
            <ArtistItems artists={artists} loading={loading} />
          </Card.Group>
        )}
      </Segment>
    );
  }
}

Artists.propTypes = {
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
