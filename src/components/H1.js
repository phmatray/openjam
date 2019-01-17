// @flow

import React from 'react';
import { Breadcrumb, Header } from 'semantic-ui-react';

type Props = {
  header?: string,
  description?: string,
};

const H1 = ({ header, description }: Props) => (
  <Header as="h1">
    <Breadcrumb as="h1" size="massive">
      <Breadcrumb.Section active>
        <strong style={{ fontWeight: '900', fontSize: '1.1em' }}>{header}</strong>
      </Breadcrumb.Section>
      {/* <Breadcrumb.Divider icon="right chevron" />
        <Breadcrumb.Section link>
          <Header as="h1">Registration</Header>
        </Breadcrumb.Section> */}
    </Breadcrumb>
    <Header.Subheader style={{ fontWeight: '300', color: '#999' }}>
      {description || <br />}
    </Header.Subheader>
  </Header>
);

H1.defaultProps = {
  header: 'header',
  description: '',
};

export default H1;
