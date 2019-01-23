// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import type { ArtistBasic } from 'lib/types';

import Card from './styled/Card';
import Content from './styled/Content';
import Title from './styled/Title';

type Props = {
  artist: ArtistBasic,
};

const Artist = ({ artist }: Props) => (
  <Link to={`/artist/${artist._id}`}>
    <Card imagesrc={artist.images && artist.images.length > 0 && artist.images[0].url}>
      <Content>
        <Title>{artist.name}</Title>
      </Content>
    </Card>
  </Link>
);

export default Artist;
