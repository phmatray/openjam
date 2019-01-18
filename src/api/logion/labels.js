// @flow

import axios from 'axios';

import { getApi } from '../logion';

const apiLabel = `${getApi()}/label`;

export async function fetchLabels() {
  const baseUrl = `${apiLabel}?`;

  const response = await axios.get(`${baseUrl}`);
  const labels = response.data.docs;
  return labels;
}

export function addLabel() {
  console.warn('not implemented');
}
