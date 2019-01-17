// @flow

import * as React from 'react';
import { Divider, Header, Container } from 'semantic-ui-react';

import TitleBreadcrumb from './TitleBreadcrumb';

type Props = {
  breadcrumbSegments: [any],
  children?: React.Node,
  description?: any,
};

const Body = ({ breadcrumbSegments, description, children }: Props) => (
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

Body.defaultProps = {
  children: null,
  description: null,
};

export default Body;
