// @flow

type ActionById = {
  response: { entities: { labels: any } },
};

type StateById = {};
type State = {};

const byId = (state: StateById = {}, action: ActionById) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.labels,
    };
  }
  return state;
};

export default byId;

export const getLabel = (state: State, id: string) => state[id];
