// @flow

import axios from 'axios';

import { getApi } from '../logion';

const apiPlaylist = `${getApi()}/playlist`;

export async function fetchPlaylists() {
  const baseUrl = `${apiPlaylist}?`;

  const response = await axios.get(`${baseUrl}`);
  const playlists = response.data.docs;
  return playlists;
}

export function addPlaylist() {
  console.warn('not implemented');
}
