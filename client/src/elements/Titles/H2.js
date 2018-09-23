import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';
import { Header } from 'semantic-ui-react';

const H2 = ({ header }) => {
  return (
    <Header as="h2" style={{ marginTop: 0 }}>
      <strong style={{ fontWeight: '900', fontSize: '0.85em' }}>{header}</strong>
    </Header>
  );
};

H2.propTypes = {
  header: PropTypes.string,
};

H2.defaultProps = {
  header: 'header',
};

export default H2;
