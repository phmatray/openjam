/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import PropTypes from 'prop-types';

const Track = ({ onClick, type2, title }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: type2 === 'original' ? 'underline' : 'none',
    }}
  >
    {title}
  </li>
);

Track.propTypes = {
  onClick: PropTypes.func.isRequired,
  type2: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Track;
