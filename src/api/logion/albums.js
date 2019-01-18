// @flow

import axios from 'axios';

import { getApi } from '../logion';

const apiAlbum = `${getApi()}/album`;

export async function fetchAlbums() {
  const baseUrl = `${apiAlbum}?`;

  const response = await axios.get(`${baseUrl}`);
  const albums = response.data.docs;
  return albums;
}

export function addAlbum() {
  console.warn('not implemented');
}
