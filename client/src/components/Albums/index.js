import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAlbums } from '../../redux/modules/album';
import { Segment, Header, Card, Divider } from 'semantic-ui-react';
import AlbumItems from './presenter';
import H1 from '../../elements/Titles/H1';
import H2 from '../../elements/Titles/H2';

class Albums extends Component {
  componentDidMount() {
    this.props.fetchAlbums();
  }

  render() {
    const { albums, loading } = this.props;

    return (
      <Segment basic>
        <H1 header="Albums" description="Pick some music by album." />
        <Divider />

        <H2 header="What's new" />
        {albums !== null && <AlbumItems albums={albums} loading={loading} />}
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
