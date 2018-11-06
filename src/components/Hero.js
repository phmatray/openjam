import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

import HeroContainer from './hero/HeroContainer';
import PlayPause from './hero/PlayPause';
import { Overlay, ContainerFullHeight } from './hero/Atoms';

import Flex from './Flex';
import LinkEntity from './LinkEntity';
import LinkArtistNames from './LinkArtistNames';
import Div from './Div';

const getFirstTrack = entity => {
  switch (entity.type) {
    case 'track':
      return entity;

    case 'album':
    case 'playlist':
      return entity.tracks[0];

    default:
      return null;
  }
};

const Hero = ({ entity }) => {
  const firstTrack = getFirstTrack(entity);

  return (
    <HeroContainer fluid src={firstTrack.coverurl.w800}>
      <Overlay>
        <ContainerFullHeight>
          <Flex fluid row alignCenter>
            <Div mr="16px">
              <PlayPause entity={entity} />
            </Div>
            <Flex fluid column justifyCenter>
              <Header as="h1" inverted>
                <LinkEntity entity={entity} as="inverted" alternate />
              </Header>
              {entity.type === 'track' && (
                <Header as="h2" inverted style={{ marginTop: 0 }}>
                  <LinkArtistNames artists={firstTrack.artists} as="inverted" />
                </Header>
              )}
            </Flex>
          </Flex>
        </ContainerFullHeight>
      </Overlay>
    </HeroContainer>
  );
};

Hero.propTypes = {
  entity: PropTypes.shape({
    type: PropTypes.oneOf(['track', 'album']).isRequired,
  }).isRequired,
};

export default Hero;
