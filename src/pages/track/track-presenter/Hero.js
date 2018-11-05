import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

import HeroContainer from './hero/HeroContainer';
import PlayPause from './hero/PlayPause';
import { Overlay, ContainerFullHeight } from './hero/Atoms';

import Flex from '../../../components/Flex';
import LinkEntity from '../../../components/LinkEntity';
import LinkArtistNames from '../../../components/LinkArtistNames';
import Div from '../../../components/Div';

const Hero = ({ track }) => (
  <HeroContainer fluid src={track.coverurl.w800}>
    <Overlay>
      <ContainerFullHeight>
        <Flex fluid row alignCenter>
          <Div mr="16px">
            <PlayPause track={track} />
          </Div>
          <Flex fluid column justifyCenter>
            <Header as="h1" inverted>
              <LinkEntity entity={track} as="inverted" alternate />
            </Header>
            <Header as="h2" inverted style={{ marginTop: 0 }}>
              <LinkArtistNames artists={track.artists} as="inverted" />
            </Header>
          </Flex>
        </Flex>
      </ContainerFullHeight>
    </Overlay>
  </HeroContainer>
);

Hero.propTypes = {
  track: PropTypes.shape({
    title: PropTypes.string.isRequired,
    artists: PropTypes.arrayOf(PropTypes.object).isRequired,
    album: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    coverurl: PropTypes.shape({
      w400: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Hero;
