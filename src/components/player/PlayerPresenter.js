// @flow

import React from 'react';
import { withNamespaces } from 'react-i18next';
import { Button, Icon, Responsive, Container } from 'semantic-ui-react';

import Flex from '../Flex';
import Div from '../Div';
import LinkArtistNames from '../LinkArtistNames';
import LinkEntity from '../LinkEntity';
import withTheme from '../../hocs/withTheme';
import Progress from '../../containers/Progress';
import { fancyTimeFormat } from '../../lib/utils/playerHelpers';

import { PlayerStyled, FlexFill, ColumnCover, ColumnTime, Cover, ArtistName } from './styles';

type Props = {
  play: () => void,
  pause: () => void,
  previous: () => void,
  next: () => void,
  playing: boolean,
  current: {
    _id: string,
    coverurl: { w200: string },
    title: string,
    artists: [{}],
  },
  audioInfo: { position: number, duration: number },
  t: any,
};

const PlayerPresenter = ({
  height,
  play,
  pause,
  previous,
  next,
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
                    <Button icon onClick={previous} size="big">
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
                    <Button icon onClick={next} size="big">
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

export default withTheme(withNamespaces('common')(PlayerPresenter));
