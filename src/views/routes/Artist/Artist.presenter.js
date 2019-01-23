// @flow

import React from 'react';
import { Container, Grid, Image, Header, Divider } from 'semantic-ui-react';

import Hero from 'views/components/Hero';
import { Flex, Div } from 'views/elements';
import type { ArtistBasic } from 'lib/types';

import ActionsMenu from './children/ActionsMenu';
import Tabs from './children/Tabs';
import Aside from './children/Aside';

type Props = {
  artist: ArtistBasic,
  loading: boolean,
};

const ArtistPresenter = ({ artist, loading }: Props) =>
  artist.images && artist.information ? (
    <React.Fragment>
      <Hero src={artist.images[0].url}>
        <Flex fluid row alignCenter>
          <Div mr="16px">
            <Image circular size="small" src={artist.images[0].url} />
          </Div>
          <div style={{ color: 'white' }}>
            <Header as="h1" inverted>
              {artist.name}
            </Header>

            {`from ${artist.information.origin}`}
            <br />
          </div>
        </Flex>
      </Hero>

      <ActionsMenu artist={artist} />
      <Divider style={{ marginTop: 0 }} />

      <Container>
        <Grid divided stackable reversed="mobile">
          <Grid.Column mobile={16} tablet={10} computer={11}>
            <Tabs artist={artist} loading={loading} />
          </Grid.Column>
          <Grid.Column mobile={8} tablet={6} computer={5}>
            <Aside artist={artist} />
          </Grid.Column>
        </Grid>
      </Container>
    </React.Fragment>
  ) : (
    <span>This artist has no profile</span>
  );

export default ArtistPresenter;
