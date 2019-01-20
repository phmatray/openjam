// @flow

type ActionById = {
  response: { entities: { playlists: any } },
};

type StateById = {};
type State = {};

const byId = (state: StateById = {}, action: ActionById) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.playlists,
    };
  }
  return state;
};

export default byId;

export const getPlaylist = (state: State, id: string) => state[id];
