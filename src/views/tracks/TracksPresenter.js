// @flow

import React from 'react';
import { Header, Container } from 'semantic-ui-react';

import Div from '../../components/Div';
import Flex from '../../components/Flex';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import type { TrackBasic } from '../../types';

import ActionsMenu from './tracks-presenter/ActionsMenu';

type Props = {
  tracks: TrackBasic[],
  background: string,
  header?: string,
  subheader?: string,
};

const TracksPresenter = ({ tracks, header, subheader, background }: Props) => (
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

    <Div mt="1em" mb="1em">
      <ActionsMenu />
    </Div>

    <Div mb="1em">
      <Container>
        <Section items={tracks} scrollable={false} showDivider={false} />
      </Container>
    </Div>
  </React.Fragment>
);

TracksPresenter.defaultProps = {
  header: null,
  subheader: null,
};

export default TracksPresenter;
