const byId = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_TRACKS_SUCCESS':
      console.error({ state, response: action.response });
      // eslint-disable-next-line no-case-declarations
      const nextState = { ...state };
      action.response.forEach(track => {
        nextState[track._id] = track;
      });
      return nextState;
    default:
      return state;
  }
};

export default byId;

export const getTrack = (state, id) => state[id._id];
