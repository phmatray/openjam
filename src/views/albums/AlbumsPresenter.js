// @flow

import React from 'react';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';

import Album from '../../components/model/Album';
import Body from '../../components/Body';
import Flex from '../../components/Flex';
import H2 from '../../components/H2';

type Props = {
  albums: { _id: string }[],
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
