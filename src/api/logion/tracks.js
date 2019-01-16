// @flow

import axios from 'axios';

import { getApi } from '../logion';

const apiTrack = `${getApi()}/track`;

export async function fetchTracks(filter: ?'all' | 'original' | ?'remix') {
  let baseUrl = `${apiTrack}?`;
  if (filter && filter !== 'all') {
    baseUrl += `type2=${filter}`;
  }

  const response = await axios.get(`${baseUrl}&%24embed=artists`);
  const tracks = response.data.docs;
  return tracks;
}

export function addTrack() {
  console.warn('not implemented');
}
