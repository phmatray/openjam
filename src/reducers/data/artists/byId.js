// @flow

type ActionById = {
  response: { entities: { artists: any } },
};

type StateById = {};
type State = {};

const byId = (state: StateById = {}, action: ActionById) => {
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
