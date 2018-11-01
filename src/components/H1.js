import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb, Header } from 'semantic-ui-react';

const H1 = ({ header, description }) => (
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

H1.propTypes = {
  header: PropTypes.string,
  description: PropTypes.string,
};

H1.defaultProps = {
  header: 'header',
  description: '',
};

export default H1;
