import React from 'react';
import PropTypes from 'prop-types';
import { Divider, Header, Container } from 'semantic-ui-react';

import TitleBreadcrumb from './TitleBreadcrumb';

const Body = ({ breadcrumbSegments, description, children }) => (
  <Container>
    <Header as="h1">
      <TitleBreadcrumb breadcrumbSegments={breadcrumbSegments} />
      <Header.Subheader style={{ fontWeight: '300', color: '#999' }}>
        {description || <br />}
      </Header.Subheader>
    </Header>

    <Divider />
    {children}
  </Container>
);

Body.propTypes = {
  breadcrumbSegments: PropTypes.arrayOf(PropTypes.any).isRequired,
  description: PropTypes.any,
};

Body.defaultProps = {
  description: null,
};

export default Body;
