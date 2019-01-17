// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import Card from './artist/Card';
import Content from './artist/Content';
import Title from './artist/Title';

type Props = {
  artist: {
    _id: string,
    name: string,
    images: { url: string }[],
  },
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
