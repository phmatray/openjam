// @flow

import React from 'react';
import LinkEntity from 'views/components/LinkEntity';

type Props = {
  artistIds: string[],
  as?: 'link' | 'table' | 'inverted',
};

const LinkArtistNames = ({ artistIds, as }: Props) => null;
// // artists.length > 0 &&
// // artists
// //   .map(artist => {
// //     if (!artist.images && !artist.information) {
// //       return artist.name;
// //     }

// //     if (artist !== null) {
// //       return <LinkEntity key={artist._id} entity={artist} as={as} />;
// //     }
// //     return null;
// //   })
// //   .reduce((prev, curr) => [prev, ' & ', curr]);

LinkArtistNames.defaultProps = {
  as: 'link',
};

export default LinkArtistNames;
