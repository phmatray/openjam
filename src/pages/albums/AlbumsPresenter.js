import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';

import Album from '../../components/model/Album';
import Body from '../../components/Body';
import Flex from '../../components/Flex';
import H2 from '../../components/H2';

const AlbumsPresenter = ({ albums, t }) => (
  <Body
    breadcrumbSegments={[
      <Link to="/discover">{t('pages.discover.header')}</Link>,
      t('pages.albums.header'),
    ]}
    description={t('pages.albums.subheader')}
  >
    <H2 header={t('pages.albums.new')} />
    <Flex wrap justifyStart>
      {albums.map(album => (
        <Album key={album._id} album={album} />
      ))}
    </Flex>
  </Body>
);

AlbumsPresenter.propTypes = {
  albums: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default withNamespaces('common')(AlbumsPresenter);
