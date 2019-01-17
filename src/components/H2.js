// @flow

import React from 'react';
import { Header } from 'semantic-ui-react';

type Props = {
  header?: string,
};

const H2 = ({ header }: Props) => (
  <Header as="h2" style={{ marginTop: 0 }}>
    <strong style={{ fontWeight: '900', fontSize: '0.85em' }}>{header}</strong>
  </Header>
);

H2.defaultProps = {
  header: 'header',
};

export default H2;
