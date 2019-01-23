// @flow
/* eslint-disable no-unused-vars */

import axios from 'axios';

import { getApi } from 'api/logion';
import type { LabelBasic, LabelFilter } from 'lib/types';

const apiLabel = `${getApi()}/label`;

export async function fetchLabels(filter: LabelFilter) {
  const baseUrl = `${apiLabel}?`;

  const response = await axios.get(`${baseUrl}`);
  return response.data.docs;
}

export function addLabel(label: LabelBasic) {
  console.warn('not implemented', label);
}
