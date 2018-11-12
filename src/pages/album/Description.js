import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const Description = ({ releaseDate }) => (
  <span>
    Release date:&nbsp;
    <Moment format="LL">{releaseDate}</Moment>
  </span>
);

Description.propTypes = {
  releaseDate: PropTypes.string.isRequired,
};

export default Description;
