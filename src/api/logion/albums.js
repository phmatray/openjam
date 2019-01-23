// @flow
/* eslint-disable no-unused-vars */

import axios from 'axios';

import { getApi } from 'api/logion';
import type { AlbumBasic } from 'lib/types';

const apiAlbum = `${getApi()}/album`;

export async function fetchAlbums() {
  const baseUrl = `${apiAlbum}?`;
  const response = await axios.get(`${baseUrl}`);
  return response.data.docs;
}

export function addAlbum(album: AlbumBasic) {
  console.warn('not implemented', album);
}
