// @flow

import type { FetchAction } from '../../../types';

type StateById = {};
type State = {};

const byId = (state: StateById = {}, action: FetchAction) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.tracks,
    };
  }
  return state;
};

export default byId;

export const getTrack = (state: State, id: string) => state[id];
