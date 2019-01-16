import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { Segment, Container } from 'semantic-ui-react';

import Div from '../../components/Div';
import HeroSimple from '../../components/HeroSimple';
import background from '../../assets/images/backgrounds/people-2562222_1920.jpg';
import Section from '../../components/Section';

import ActionsMenu from './artists-presenter/ActionsMenu';

const ArtistsPresenter = ({ artists, t }) => {
  const filteredArtists = artists.filter(a => a.images && a.images.length > 0);

  return (
    <React.Fragment>
      <HeroSimple
        background={background}
        header={t('pages.artists.header')}
        subheader={t('pages.artists.subheader')}
        divider={false}
      />

      <Div mt="1em" mb="1em">
        <ActionsMenu />
      </Div>

      <Div mb="1em">
        <Container>
          <Section items={filteredArtists} scrollable={false} showDivider={false} />
        </Container>
      </Div>
    </React.Fragment>
  );
};

ArtistsPresenter.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default withNamespaces('common')(ArtistsPresenter);
