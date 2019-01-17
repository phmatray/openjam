// @flow

import React from 'react';
import { Header, Divider } from 'semantic-ui-react';

import Hero from './Hero';
import Flex from './Flex';

type Props = {
  header: string,
  subheader: string,
  background: string,
  divider?: boolean,
};

const HeroSimple = ({ header, subheader, background, divider }: Props) => (
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

    {divider && <Divider style={{ marginTop: 0, marginBottom: 32 }} />}
  </React.Fragment>
);

HeroSimple.defaultProps = {
  divider: true,
};

export default HeroSimple;
