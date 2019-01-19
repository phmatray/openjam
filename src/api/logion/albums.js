// @flow

import axios from 'axios';

import { getApi } from '../logion';
import type { AlbumBasic } from '../../types';

const apiAlbum = `${getApi()}/album`;

export async function fetchAlbums() {
  const baseUrl = `${apiAlbum}?`;

  const response = await axios.get(`${baseUrl}`);
  const albums = response.data.docs;
  return albums;
}

export function addAlbum(album: AlbumBasic) {
  console.warn('not implemented', album);
}
