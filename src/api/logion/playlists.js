// @flow
/* eslint-disable no-unused-vars */

import axios from 'axios';

import { getApi } from '../logion';
import type { PlaylistBasic, PlaylistFilter } from '../../types';

const apiPlaylist = `${getApi()}/playlist`;

export async function fetchPlaylists(filter: PlaylistFilter) {
  const baseUrl = `${apiPlaylist}?`;

  const response = await axios.get(`${baseUrl}`);
  const playlists = response.data.docs;
  return playlists;
}

export function addPlaylist(playlist: PlaylistBasic) {
  console.warn('not implemented', playlist);
}
