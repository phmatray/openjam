// @flow

import { createSelector } from 'reselect';

import * as fromById from '../../data/labels/byId';
import { getLabels } from '../../data/labels/index';

type State = {};

// Selectors
//
export const getLabelId = (state: State, labelId: string) => labelId;

export const getLabel = createSelector(
  [getLabels, getLabelId],
  (labels, labelId) => fromById.getLabel(labels.byId, labelId),
);
