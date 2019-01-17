// @flow

import React from 'react';

import Track from './track-list/Track';

type Props = {
  tracks: {
    _id: string,
    type2: string,
    title: string,
  }[],
  onTrackClick: (trackId: string) => void,
};

const TrackList = ({ tracks, onTrackClick }: Props) => (
  <ul>
    {tracks.map(
      track =>
        track && <Track key={track._id} {...track} onClick={() => onTrackClick(track._id)} />,
    )}
  </ul>
);

export default TrackList;
