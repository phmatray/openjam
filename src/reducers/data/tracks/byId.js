const byId = (state = {}, action) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.tracks,
    };
  }
  return state;
};

export default byId;

export const getTrack = (state, id) => state[id];
