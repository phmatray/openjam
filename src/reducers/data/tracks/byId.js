// @flow

import type { Action } from '../../../types';

const byId = (state = {}, action: Action) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.tracks,
    };
  }
  return state;
};

export default byId;

export const getTrack = (state, id: string) => state[id];
