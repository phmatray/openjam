import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAlbums } from '../../redux/modules/album';
import { Segment, Header, Card } from 'semantic-ui-react';
import AlbumItems from './presenter';

class Albums extends Component {
  componentDidMount() {
    this.props.fetchAlbums();
  }

  render() {
    const { albums, loading } = this.props;

    return (
      <Segment basic>
        <Header as="h1">
          Albums
          <Header.Subheader>Pick some music by title, album, remix or label.</Header.Subheader>
        </Header>

        {albums !== null && (
          <Card.Group itemsPerRow={3}>
            <AlbumItems albums={albums} loading={loading} />
          </Card.Group>
        )}
      </Segment>
    );
  }
}

Albums.propTypes = {
  albums: PropTypes.array,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  albums: state.album.albums,
  loading: state.album.loading,
});

export default connect(
  mapStateToProps,
  { fetchAlbums },
)(Albums);
