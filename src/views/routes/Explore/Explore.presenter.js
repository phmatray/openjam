// @flow

import React from 'react';
import { Container } from 'semantic-ui-react';

import background from 'assets/images/backgrounds/piano-2601498_1920.jpg';
import HeroSimple from 'views/components/Hero/HeroSimple.presenter';
import Section from 'views/components/Section';
import { Div } from 'views/elements';
import type { ArtistBasic, TrackBasic } from 'lib/types';

import ActionsMenu from './children/ActionsMenu';

type Props = {
  originalTracks?: TrackBasic[],
  remixTracks?: TrackBasic[],
  artists?: ArtistBasic[],
  t: any,
};

const Explore = ({ originalTracks, remixTracks, artists, t }: Props) => (
  <React.Fragment>
    <HeroSimple
      background={background}
      header={t('pages.explore.header')}
      subheader={t('pages.explore.subheader')}
      divider={false}
    />

    <Div mt="1em" mb="1em">
      <ActionsMenu />
    </Div>

    <Div mb="1em">
      <Container>
        {originalTracks !== null && originalTracks !== undefined && originalTracks.length > 0 && (
          <Section
            title={t('pages.explore.original-titles')}
            items={originalTracks.slice(0, 32)}
            to="/tracks/originals"
            maxHeight={256}
          />
        )}
        {remixTracks !== null && remixTracks !== undefined && remixTracks.length > 0 && (
          <Section
            title={t('pages.explore.remix-titles')}
            items={remixTracks.slice(0, 32)}
            to="/tracks/remixes"
            maxHeight={256}
          />
        )}
        {artists !== null && artists !== undefined && artists.length > 0 && (
          <Section
            title={t('pages.explore.artists')}
            items={artists.slice(0, 16)}
            to="/artists"
            maxHeight={512}
            showDivider={false}
          />
        )}
      </Container>
    </Div>
  </React.Fragment>
);

Explore.defaultProps = {
  originalTracks: null,
  remixTracks: null,
  artists: null,
};

export default Explore;
