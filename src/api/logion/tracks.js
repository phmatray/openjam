// @flow

import axios from 'axios';

import { getApi } from '../logion';
import type { TrackFilter, TrackBasic } from '../../types';

const apiTrack = `${getApi()}/track`;

export async function fetchTracks(filter: TrackFilter) {
  let baseUrl = `${apiTrack}?`;
  if (filter && filter !== 'all') {
    baseUrl += `type2=${filter}`;
  }

  const response = await axios.get(`${baseUrl}&%24embed=artists`);
  const tracks = response.data.docs;
  return tracks;
}

export function addTrack(track: TrackBasic) {
  console.warn('not implemented', track);
}
