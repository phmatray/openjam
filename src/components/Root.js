import React from 'react';
import jwtDecode from 'jwt-decode';
import { Provider } from 'react-redux';

import setAuthToken from '../utils/setAuthToken';
import { actions } from '../redux/modules/auth';

import App from './App';

const Root = ({ store }) => {
  // Check for token
  const { accessToken, refreshToken } = localStorage;
  if (accessToken && refreshToken) {
    // Set auth token header auth
    setAuthToken(refreshToken);
    // Decode token and get user info and exp
    const decoded = jwtDecode(accessToken);
    // Set user and isAuthenticated
    store.dispatch(actions.updateAccessToken(accessToken));
    store.dispatch(actions.updateRefreshToken(refreshToken));
    store.dispatch(actions.updateUser(decoded.user));

    // Check for expire token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      // Delete the tokens
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      // Redirect to login
      window.location.href = '/login';
    }
  }

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;
