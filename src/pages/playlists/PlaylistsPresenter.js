import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';

import Body from '../../components/Body';
import Flex from '../../components/Flex';
import H2 from '../../components/H2';
import Playlist from '../../components/model/Playlist';

const PlaylistsPresenter = ({ playlists, t }) => (
  <Body
    breadcrumbSegments={[
      <Link to="/explore">{t('pages.explore.header')}</Link>,
      t('pages.playlists.header'),
    ]}
    description={t('pages.playlists.subheader')}
  >
    <H2 header={t('pages.playlists.new')} />
    <Flex wrapBreak justifyStart>
      {playlists.map(playlist => (
        <Playlist key={playlist._id} playlist={playlist} />
      ))}
    </Flex>
  </Body>
);

PlaylistsPresenter.propTypes = {
  playlists: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default withNamespaces('common')(PlaylistsPresenter);
