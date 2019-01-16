import React from 'react';
import { ThemeConsumer } from 'styled-components';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { Button, Icon, Responsive, Container } from 'semantic-ui-react';

import Flex from '../Flex';
import Div from '../Div';
import LinkArtistNames from '../LinkArtistNames';
import LinkEntity from '../LinkEntity';
import { fancyTimeFormat } from '../../lib/utils/playerHelpers';

import { PlayerStyled, FlexFill, ColumnCover, ColumnTime, Cover, ArtistName } from './styles';
import Progress from './player-presenter/Progress';

const PlayerPresenter = ({
  height,
  play,
  pause,
  previous,
  next,
  playing,
  current,
  audioInfo,
  t,
}) => (
  <ThemeConsumer>
    {theme => (
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
    )}
  </ThemeConsumer>
);

PlayerPresenter.propTypes = {
  play: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,

  playing: PropTypes.bool.isRequired,

  current: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    coverurl: PropTypes.shape({
      w200: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    artists: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,

  audioInfo: PropTypes.shape({
    position: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
  }).isRequired,
};

export default withNamespaces('common')(PlayerPresenter);
