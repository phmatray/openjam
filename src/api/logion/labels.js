// @flow
/* eslint-disable no-unused-vars */

import axios from 'axios';

import { getApi } from '../logion';
import type { LabelBasic, LabelFilter } from '../../types';

const apiLabel = `${getApi()}/label`;

export async function fetchLabels(filter: LabelFilter) {
  const baseUrl = `${apiLabel}?`;

  const response = await axios.get(`${baseUrl}`);
  const labels = response.data.docs;
  return labels;
}

export function addLabel(label: LabelBasic) {
  console.warn('not implemented', label);
}
