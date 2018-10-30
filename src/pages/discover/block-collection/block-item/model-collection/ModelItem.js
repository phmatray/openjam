import React from 'react';
import PropTypes from 'prop-types';
import ArtistItem from './model-item/ArtistItem';
import TrackItem from './model-item/TrackItem';
import AlbumItem from './model-item/AlbumItem';
import PlaylistItem from './model-item/PlaylistItem';
import LabelItem from './model-item/LabelItem';

const ModelItem = ({ model }) => {
  let modelComponent;
  switch (model.type) {
    case 'artist':
      modelComponent = <ArtistItem artist={model} />;
      break;
    case 'track':
      modelComponent = <TrackItem track={model} />;
      break;

    case 'album':
      modelComponent = <AlbumItem album={model} />;
      break;

    case 'playlist':
      modelComponent = <PlaylistItem playlist={model} />;
      break;

    case 'label':
      modelComponent = <LabelItem label={model} />;
      break;

    default:
      modelComponent = null;
      break;
  }

  return modelComponent;
};

ModelItem.propTypes = {
  model: PropTypes.shape({
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default ModelItem;
