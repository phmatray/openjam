import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

const Social = ({ href, icon }) => (
  <span>
    &nbsp;
    <a href={href} target="_blank">
      <Icon link name={icon} size="large" inverted circular />
    </a>
    &nbsp;
  </span>
);

Social.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Social;
