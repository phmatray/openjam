import React from 'react';
import PropTypes from 'prop-types';

import Model from '../Model';

const ModelCollection = ({ models }) => models.map((item, idx) => <Model key={idx} model={item} />);

ModelCollection.propTypes = {
  models: PropTypes.array.isRequired,
};

export default ModelCollection;
