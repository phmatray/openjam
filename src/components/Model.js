import React from 'react';
import PropTypes from 'prop-types';
import Artist from './model/Artist';
import Track from './model/Track';
import Album from './model/Album';
import Playlist from './model/Playlist';
import Label from './model/Label';

const Model = ({ model }) => {
  let modelComponent;
  switch (model.type) {
    case 'artist':
      modelComponent = <Artist artist={model} />;
      break;
    case 'track':
      modelComponent = <Track track={model} />;
      break;

    case 'album':
      modelComponent = <Album album={model} />;
      break;

    case 'playlist':
      modelComponent = <Playlist playlist={model} />;
      break;

    case 'label':
      modelComponent = <Label label={model} />;
      break;

    default:
      modelComponent = null;
      break;
  }

  return modelComponent;
};

Model.propTypes = {
  model: PropTypes.shape({
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default Model;
