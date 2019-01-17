// @flow

import React from 'react';
import LinkEntity from './LinkEntity';

type Props = {
  artists: [
    {
      _id: string,
      name: string,
      images: [],
      information: {},
    },
  ],
  as?: 'link' | 'table' | 'inverted',
};

const LinkArtistNames = ({ artists, as }: Props) =>
  artists.length > 0 &&
  artists
    .map(artist => {
      if (!artist.images && !artist.information) {
        return artist.name;
      }

      if (artist !== null) {
        return <LinkEntity key={artist._id} entity={artist} as={as} />;
      }
      return null;
    })
    .reduce((prev, curr) => [prev, ' & ', curr]);

LinkEntity.defaultProps = {
  as: 'link',
};

export default LinkArtistNames;
