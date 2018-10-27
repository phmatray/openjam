import React from 'react';
import PropTypes from 'prop-types';
import AlbumItem from './albums-presenter/AlbumItem';
import Body from '../../elements/UI/Body';
import Flex from '../../elements/UI/Flex';
import H2 from '../../elements/Titles/H2';

const AlbumsPresenter = ({ albums }) => (
  <Body breadcrumbSegments={['Albums']} description="Pick some music by album.">
    <H2 header="What's new" />
    <Flex>
      {albums.map(album => (
        <AlbumItem key={album._id} album={album} />
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
