import React from 'react';
import PropTypes from 'prop-types';
import Album from '../../components/model/Album';
import Body from '../../components/Body';
import Flex from '../../components/Flex';
import H2 from '../../components/H2';

const AlbumsPresenter = ({ albums }) => (
  <Body breadcrumbSegments={['Albums']} description="Pick some music by album.">
    <H2 header="What's new" />
    <Flex wrap justifyStart>
      {albums.map(album => (
        <Album key={album._id} album={album} />
      ))}
    </Flex>
  </Body>
);

AlbumsPresenter.propTypes = {
  albums: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default AlbumsPresenter;
