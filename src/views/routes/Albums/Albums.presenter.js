// @flow

import React from 'react';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';

import Album from 'views/components/Album';
import Body from 'views/components/Body';
import { Flex } from 'views/elements';
import H2 from 'views/components/H2';
import type { AlbumBasic } from 'lib/types';

type Props = {
  albums: AlbumBasic[],
  t: any,
};

const AlbumsPresenter = ({ albums, t }: Props) => (
  <Body
    breadcrumbSegments={[
      <Link to="/explore">{t('pages.explore.header')}</Link>,
      t('pages.albums.header'),
    ]}
    description={t('pages.albums.subheader')}
  >
    <H2 header={t('pages.albums.new')} />
    <Flex wrapBreak justifyStart>
      {albums.map(album => (
        <Album key={album._id} album={album} />
      ))}
    </Flex>
  </Body>
);

export default withNamespaces('common')(AlbumsPresenter);
