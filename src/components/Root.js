// @flow

import React from 'react';
import jwtDecode from 'jwt-decode';
import HttpsRedirect from 'react-https-redirect';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import setAuthToken from '../lib/utils/setAuthToken';
import { actions } from '../reducers/auth';

import App from './App';

type Props = { store: any };

const Root = ({ store }: Props) => {
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
    <HttpsRedirect>
      <Provider store={store}>
        <Router>
          <div>
            <Route path="/" component={App} />
          </div>
        </Router>
      </Provider>
    </HttpsRedirect>
  );
};

export default Root;
