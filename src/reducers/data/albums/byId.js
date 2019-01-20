// @flow

type ActionById = {
  response: { entities: { albums: any } },
};

type StateById = {};
type State = {};

const byId = (state: StateById = {}, action: ActionById) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.albums,
    };
  }
  return state;
};

export default byId;

export const getAlbum = (state: State, id: string) => state[id];
