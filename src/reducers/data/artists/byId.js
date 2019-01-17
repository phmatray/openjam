// @flow

type State = {};

const byId = (state: State = {}, action) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.artists,
    };
  }
  return state;
};

export default byId;

export const getArtist = (state, id) => state[id];
