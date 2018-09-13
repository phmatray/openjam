function optionsAreValid(types) {
  if (!types) return false;
  if (types) return true;
  return false;
}

// Middleware
// Our middleware function receives an object with two fields: dispatch and getState.
// These are named parameters provided by Redux.
//
const slimAsync = store => next => action => {
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

  return callAPI()
    .then(response => {
      const successAction = {
        type: successType,
        payload: response.data,
      };

      dispatch(successAction);

      return Promise.resolve(getState());
    })
    .catch(error => {
      const errorAction = {
        type: errorType,
        payload: error,
      };

      dispatch(errorAction);

      return Promise.reject(error);
    });
};

export default slimAsync;
