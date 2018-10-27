import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import { extractWithoutExtension } from '../utils/domainHelpers';

const Social = ({ href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" style={{ margin: '5px' }}>
    <Icon name={extractWithoutExtension(href)} />
  </a>
);

Social.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default Social;
