const byId = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_ARTISTS_SUCCESS':
      // eslint-disable-next-line no-case-declarations
      const nextState = { ...state };
      action.response.forEach(artist => {
        nextState[artist._id] = artist;
      });
      return nextState;
    default:
      return state;
  }
};

export default byId;

export const getArtist = (state, id) => state[id._id];
