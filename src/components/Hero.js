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

const extractData = entity => {
  switch (entity.type) {
    case 'track':
      return { artists: entity.artists, coverurl: entity.coverurl.w800 };

    case 'album':
    case 'playlist':
      return { artists: entity.tracks[0].artists, coverurl: entity.tracks[0].coverurl.w800 };

    case 'artist':
      return { coverurl: entity.images[1].url };

    default:
      return null;
  }
};

const Hero = ({ entity, children }) => {
  const data = extractData(entity);

  return (
    <HeroContainer fluid src={data.coverurl}>
      <Overlay>
        <ContainerFullHeight>
          {children || (
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
                    <LinkArtistNames artists={data.artists} as="inverted" />
                  </Header>
                )}
              </Flex>
            </Flex>
          )}
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
