// @flow

import React from 'react';
import { Divider } from 'semantic-ui-react';

import { Div } from 'views/elements';
import LinkArtistNames from 'views/components/LinkArtistNames';
import LinkEntity from 'views/components/LinkEntity';
import type { TrackBasic } from 'lib/types';

import CoverToggle from './children/CoverToggle';
import Artists from './styled/Artists';
import ContentBlock from './styled/ContentBlock';
import Details from './styled/Details';

type Props = {
  isNew: (track: TrackBasic) => boolean,
  isActive: boolean,
  track: TrackBasic,
  playTrack: () => void,
  pause: () => void,
  playerPlaying: boolean,
};

const Presenter = ({ isNew, isActive, track, playTrack, pause, playerPlaying }: Props) => (
  <ContentBlock active={isActive}>
    <Div mr="0.5em">
      <CoverToggle
        track={track}
        isActive={isActive}
        isNew={isNew(track)}
        playTrack={playTrack}
        pause={pause}
        playerPlaying={playerPlaying}
      />
    </Div>
    <Details>
      <Divider style={{ margin: '0 0 0.6em 0' }} />
      <LinkEntity entity={track} as="table" strong />
      <Artists>
        {console.warn({ artists: track.artists })}
        <LinkArtistNames artistIds={track.artists.map(a => a.artist)} as="table" />
      </Artists>
    </Details>
  </ContentBlock>
);

export default Presenter;
