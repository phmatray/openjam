// @flow

function optionsAreValid(types) {
  if (!types) return false;
  if (types) return true;
  return false;
}

const getAction = (type, payload) => ({ type, payload });

// Middleware
// Our middleware function receives an object with two fields: dispatch and getState.
// These are named parameters provided by Redux.
//
const slimAsync = store => next => async action => {
  const { dispatch, getState } = store;
  const { types, callAPI, shouldCallAPI = () => true } = action;

  if (!optionsAreValid(types)) {
    return next(action);
  }
  if (!shouldCallAPI(getState())) {
    return Promise.resolve(getState());
  }

  const [pendingType, successType, errorType] = types;

  const pendingAction = { type: pendingType };

  dispatch(pendingAction);

  try {
    const response = await callAPI();

    dispatch(getAction(successType, response.data));
    return Promise.resolve(getState());
  } catch (error) {
    dispatch(getAction(errorType, error));
    return Promise.reject(error);
  }
};

export default slimAsync;
