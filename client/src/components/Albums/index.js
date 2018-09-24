import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAlbums } from '../../redux/modules/album';
import AlbumsPresenter from './presenter';
import Body from '../../elements/UI/Body';
import H2 from '../../elements/Titles/H2';

class Albums extends Component {
  componentDidMount() {
    this.props.fetchAlbums();
  }

  render() {
    const { albums, loading } = this.props;

    return (
      <Body breadcrumbSegments={['Albums']} description="Pick some music by album.">
        <H2 header="What's new" />
        {albums !== null && <AlbumsPresenter albums={albums} loading={loading} />}
      </Body>
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
