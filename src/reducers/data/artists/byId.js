// @flow

import type { FetchAction } from '../../../types';

type StateById = {};
type State = {};

const byId = (state: StateById = {}, action: FetchAction) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.artists,
    };
  }
  return state;
};

export default byId;

export const getArtist = (state: State, id: string) => state[id];
