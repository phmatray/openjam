// @flow

import React from 'react';
import LinkEntity from './LinkEntity';

import type { ArtistBasic } from '../types';

type Props = {
  artists: ArtistBasic[],
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

LinkArtistNames.defaultProps = {
  as: 'link',
};

export default LinkArtistNames;
