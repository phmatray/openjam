// @flow

import React from 'react';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';

import Body from 'views/components/Body';
import { Flex } from 'views/elements';
import H2 from 'views/components/H2';
import Playlist from 'views/components/Playlist';
import type { PlaylistBasic } from 'lib/types';

type Props = {
  playlists: PlaylistBasic[],
  t: any,
};

const PlaylistsPresenter = ({ playlists, t }: Props) => (
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

export default withNamespaces('common')(PlaylistsPresenter);
