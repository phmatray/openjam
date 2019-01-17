// @flow

import React from 'react';

type Props = {
  tracks: {
    track: { coverurl: { w400: string } }[],
  },
  radius?: string,
};

const PlaylistCover = ({ tracks, radius }: Props) => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      borderRadius: radius,
      overflow: 'hidden',
      border: '1px solid #ccc',
    }}
  >
    <img
      src={tracks[0].track.coverurl.w400}
      alt="Top left cover"
      style={{ width: '50%', height: '50%' }}
    />
    <img
      src={tracks[1].track.coverurl.w400}
      alt="Top right cover"
      style={{ width: '50%', height: '50%' }}
    />
    <img
      src={tracks[2].track.coverurl.w400}
      alt="Bottom left cover"
      style={{ width: '50%', height: '50%' }}
    />
    <img
      src={tracks[3].track.coverurl.w400}
      alt="Bottom right cover"
      style={{ width: '50%', height: '50%' }}
    />
  </div>
);

PlaylistCover.defaultProps = {
  radius: '3%',
};

export default PlaylistCover;
