import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchArtists } from '../../redux/modules/artist';
import { Card } from 'semantic-ui-react';
import ArtistItems from './presenter';
import Body from '../../elements/UI/Body';
import H2 from '../../elements/Titles/H2';

class Artists extends Component {
  componentDidMount() {
    this.props.fetchArtists();
  }

  render() {
    const { artists, loading } = this.props;

    return (
      <Body breadcrumbSegments={['Artists']} description="Pick some music by artist.">
        <H2 header="What's new" />
        {artists !== null && (
          <Card.Group itemsPerRow={3}>
            <ArtistItems artists={artists} loading={loading} />
          </Card.Group>
        )}
      </Body>
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
