// @flow

import React from 'react';
import { Button, Icon, Responsive, Container } from 'semantic-ui-react';

import Progress from 'views/components/Progress';
import LinkArtistNames from 'views/components/LinkArtistNames';
import LinkEntity from 'views/components/LinkEntity';
import { Flex, Div } from 'views/elements';
import { fancyTimeFormat } from 'lib/utils/playerHelpers';
import type { TrackBasic } from 'lib/types';

import PlayerStyled from './styled/PlayerStyled';
import FlexFill from './styled/FlexFill';
import ColumnCover from './styled/ColumnCover';
import ColumnTime from './styled/ColumnTime';
import Cover from './styled/Cover';
import ArtistName from './styled/ArtistName';

type Props = {
  height: number,
  play: () => void,
  pause: () => void,
  previousTrack: () => void,
  nextTrack: () => void,
  playing: boolean,
  current: TrackBasic,
  audioInfo: { position: number, duration: number },
  theme: any,
  t: any,
};

const PlayerPresenter = ({
  height,
  play,
  pause,
  previousTrack,
  nextTrack,
  playing,
  current,
  audioInfo,
  theme,
  t,
}: Props) => (
  <PlayerStyled height={height}>
    <Container style={{ height: '100%' }}>
      <FlexFill>
        <ColumnCover>
          {current !== null && current.coverurl !== null && (
            <Cover src={current.coverurl.w200} alt="cover" />
          )}
        </ColumnCover>

        <Flex column fluid>
          <Progress position={audioInfo.position} duration={audioInfo.duration} />
          <Flex fluid spaceBetween>
            <Flex fluid>
              <Div ml="1em" mr="1em">
                <Flex fluid alignCenter>
                  {/* TODO: open current playlist */}
                  {/* <Button icon disabled>
                    <Icon name="list" />
                  </Button> */}
                  {/* TODO: set random */}
                  {/* <Button icon disabled>
                    <Icon name="random" />
                  </Button> */}
                  <Button.Group>
                    <Button icon onClick={previousTrack} size="big">
                      <Icon name="step backward" />
                    </Button>
                    <Button
                      icon
                      onClick={playing ? pause : play}
                      color={theme.primarySemantic}
                      size="big"
                    >
                      <Icon name={playing ? 'pause' : 'play'} />
                    </Button>
                    <Button icon onClick={nextTrack} size="big">
                      <Icon name="step forward" />
                    </Button>
                  </Button.Group>
                  {/* TODO: set loop one and loop all */}
                  {/* <Button icon disabled>
                    <Icon name="repeat" />
                      </Button> */}
                  {/* TODO: share on other medias with a dropdown
                      - copy link to clipboard
                      - generate QR code
                      - share to facebook and twitter
                    */}
                  {/* <Button icon disabled>
                    <Icon name="share alternate" />
                  </Button> */}
                </Flex>
              </Div>
              <Flex column justifyCenter>
                <LinkEntity entity={current} as="inverted" alternate />
                {/* <TrackName>
                    {current.title} <Edit>{current.edit && `(${current.edit})`}</Edit>
                  </TrackName> */}
                <ArtistName>
                  <i>{t('components.player.by')}</i>
                  &nbsp;&nbsp;
                  <LinkArtistNames artists={current.artists.map(a => a.artist)} as="inverted" />
                </ArtistName>
              </Flex>
            </Flex>
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
              <ColumnTime>
                {`${
                  audioInfo && audioInfo.position ? fancyTimeFormat(audioInfo.position) : '0:00'
                } / ${
                  audioInfo && audioInfo.duration ? fancyTimeFormat(audioInfo.duration) : '0:00'
                }`}
              </ColumnTime>
            </Responsive>
          </Flex>
        </Flex>
      </FlexFill>
    </Container>
  </PlayerStyled>
);

export default PlayerPresenter;
