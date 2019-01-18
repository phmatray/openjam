// @flow

import React from 'react';

import type { TrackBasic } from '../../types';

import Track from './track-list/Track';

type Props = {
  tracks: TrackBasic[],
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
