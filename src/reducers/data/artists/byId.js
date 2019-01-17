// @flow

const byId = (state = {}, action) => {
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
