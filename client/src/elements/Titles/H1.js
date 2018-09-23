import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';
import { Header } from 'semantic-ui-react';

const H1 = ({ header, description }) => {
  return (
    <Header as="h1">
      <strong style={{ fontWeight: '900', fontSize: '1.1em' }}>{header}</strong>
      <Header.Subheader style={{ fontWeight: '300', color: '#999' }}>
        {description ? description : <br />}
      </Header.Subheader>
    </Header>
  );
};

H1.propTypes = {
  header: PropTypes.string,
  description: PropTypes.string,
};

H1.defaultProps = {
  header: 'header',
  description: '',
};

export default H1;
