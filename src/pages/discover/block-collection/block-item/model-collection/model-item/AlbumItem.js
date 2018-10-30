import React from 'react';
import PropTypes from 'prop-types';
import Cover from './album-item/Cover';
import Title from './album-item/Title';
import Label from './album-item/Label';
import Item from './album-item/Item';

const AlbumItem = ({ album }) => {
  return (
    <Item>
      <Cover src={album.imagesrc} />
      <br />
      <Title>{album.title}</Title>
      <Label>
        <span>{album.artist} </span>
      </Label>
    </Item>
  );
};

AlbumItem.propTypes = {
  album: PropTypes.shape({
    imagesrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
  }).isRequired,
};

export default AlbumItem;
