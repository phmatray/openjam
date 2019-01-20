// @flow
/* eslint-disable no-unused-vars */

import axios from 'axios';

import { getApi } from '../logion';
import type { AlbumBasic, AlbumFilter } from '../../types';

const apiAlbum = `${getApi()}/album`;

export async function fetchAlbums(filter: AlbumFilter) {
  const baseUrl = `${apiAlbum}?`;

  const response = await axios.get(`${baseUrl}`);
  const albums = response.data.docs;
  return albums;
}

export function addAlbum(album: AlbumBasic) {
  console.warn('not implemented', album);
}
