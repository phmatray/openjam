// @flow

import axios from 'axios';

import { getApi } from 'api/logion';
import type { TrackBasic } from 'lib/types';

const apiTrack = `${getApi()}/track`;

export async function fetchTracks() {
  const baseUrl = `${apiTrack}?`;
  const response = await axios.get(`${baseUrl}%24embed=artists&%24embed=albums&%24flatten=true`);
  return response.data.docs;
}

export function addTrack(track: TrackBasic) {
  console.warn('not implemented', track);
}
