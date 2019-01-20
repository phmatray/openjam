// @flow

type ActionById = {
  response: { entities: { tracks: any } },
};

type StateById = {};
type State = {};

const byId = (state: StateById = {}, action: ActionById) => {
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
