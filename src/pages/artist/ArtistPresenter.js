import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Image, Header, Divider } from 'semantic-ui-react';

import Hero from '../../components/Hero';
import Flex from '../../components/Flex';
import Div from '../../components/Div';

import ActionsMenu from './artist-presenter/ActionsMenu';
import Tabs from './artist-presenter/Tabs';
import Aside from './artist-presenter/Aside';

const ArtistPresenter = ({ artist }) =>
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
            <Tabs artist={artist} />
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

ArtistPresenter.propTypes = {
  artist: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArtistPresenter;
