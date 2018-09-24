import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb, Segment, Divider, Header } from 'semantic-ui-react';

const Body = ({ header, description, children }) => {
  return (
    <Segment basic>
      <Header as="h1">
        <Breadcrumb size="massive">
          {header
            .map(segment => (
              <Breadcrumb.Section active key={segment}>
                <strong style={{ fontWeight: '900', fontSize: '1.1em' }}>{segment}</strong>
              </Breadcrumb.Section>
            ))
            .reduce((prev, curr, idx) => [
              prev,
              <Breadcrumb.Divider icon="right chevron" key={idx} />,
              curr,
            ])}

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
  description: PropTypes.string,
};

export default Body;
