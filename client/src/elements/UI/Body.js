import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb, Segment, Divider, Header } from 'semantic-ui-react';
import H1 from '../Titles/H1';

const Body = ({ header, description, children }) => {
  return (
    <Segment basic>
      <Header as="h1">
        <Breadcrumb as="h1" size="massive">
          {header
            .map(segment => (
              <Breadcrumb.Section active>
                <strong style={{ fontWeight: '900', fontSize: '1.1em' }}>{segment}</strong>
              </Breadcrumb.Section>
            ))
            .reduce((prev, curr) => [prev, <Breadcrumb.Divider icon="right chevron" />, curr])}

          {/* <Breadcrumb.Section active>
            <strong style={{ fontWeight: '900', fontSize: '1.1em' }}>{header}</strong>
          </Breadcrumb.Section>
          <Breadcrumb.Divider icon="right chevron" />
          <Breadcrumb.Section link>
            <Header as="h1">Registration</Header>
          </Breadcrumb.Section> */}
        </Breadcrumb>
        <Header.Subheader style={{ fontWeight: '300', color: '#999' }}>
          {description ? description : <br />}
        </Header.Subheader>
      </Header>

      <Divider />
      {children}
    </Segment>
  );
};

Body.propTypes = {
  header: PropTypes.arrayOf(PropTypes.any).isRequired,
  description: PropTypes.string.isRequired,
};

export default Body;
