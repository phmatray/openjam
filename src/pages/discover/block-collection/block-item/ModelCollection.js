import React from 'react';
import PropTypes from 'prop-types';
import ModelItem from './model-collection/ModelItem';

const ModelCollection = ({ models }) =>
  models.map((item, idx) => <ModelItem key={idx} model={item} />);

ModelCollection.propTypes = {
  models: PropTypes.array.isRequired,
};

export default ModelCollection;
