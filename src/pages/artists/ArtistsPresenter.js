import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';

import Artist from '../../components/model/Artist';
import Body from '../../components/Body';
import Flex from '../../components/Flex';
import H2 from '../../components/H2';

const ArtistsPresenter = ({ artists, t }) => (
  <Body
    breadcrumbSegments={[
      <Link to="/discover">{t('pages.discover.header')}</Link>,
      t('pages.artists.header'),
    ]}
    description={t('pages.artists.subheader')}
  >
    <H2 header={t('pages.artists.new')} />
    <Flex wrap justifyStart>
      {artists.map(artist => (
        <Artist key={artist._id} artist={artist} />
      ))}
    </Flex>
  </Body>
);

ArtistsPresenter.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default withNamespaces('common')(ArtistsPresenter);
