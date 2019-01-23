// @flow
/* eslint-disable no-unused-vars */

import axios from 'axios';

import { getApi } from 'api/logion';
import type { ArtistBasic, ArtistFilter } from 'lib/types';

const apiArtist = `${getApi()}/artist`;

export async function fetchArtists(filter: ArtistFilter) {
  const baseUrl = `${apiArtist}?`;

  const response = await axios.get(`${baseUrl}`);
  return response.data.docs;
}

export function addArtist(artist: ArtistBasic) {
  console.warn('not implemented', artist);
}
