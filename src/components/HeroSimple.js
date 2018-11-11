import React from 'react';
import PropTypes from 'prop-types';
import { Header, Divider } from 'semantic-ui-react';

import Hero from './Hero';
import Flex from './Flex';

const HeroSimple = ({ background, header, subheader }) => (
  <React.Fragment>
    <Hero src={background}>
      <Flex fluid row alignCenter>
        <div style={{ color: 'white', maxWidth: '400px' }}>
          <Header as="h1" inverted>
            {header}
          </Header>
          <Header as="h3" inverted>
            {subheader}
          </Header>
          <br />
        </div>
      </Flex>
    </Hero>
    <Divider style={{ marginTop: 0, marginBottom: 32 }} />
  </React.Fragment>
);

HeroSimple.propTypes = {
  background: PropTypes.string,
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string.isRequired,
};

HeroSimple.defaultProps = {
  background: null,
};

export default HeroSimple;
