// @flow
/* eslint-disable no-unused-vars */

import axios from 'axios';

import { getApi } from '../logion';
import type { ArtistBasic, ArtistFilter } from '../../types';

const apiArtist = `${getApi()}/artist`;

export async function fetchArtists(filter: ArtistFilter) {
  const baseUrl = `${apiArtist}?`;

  const response = await axios.get(`${baseUrl}`);
  const artists = response.data.docs;
  return artists;
}

export function addArtist(artist: ArtistBasic) {
  console.warn('not implemented', artist);
}
