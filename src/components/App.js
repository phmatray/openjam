import React from 'react';
import HttpsRedirect from 'react-https-redirect';
import jwtDecode from 'jwt-decode';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { withNamespaces } from 'react-i18next';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Layout from './Layout';
import Routes from './Routes';
import ThemeWrapper from './app/ThemeWrapper';

import store from '../redux/store';
import { actions } from '../redux/modules/auth';
import setAuthToken from '../utils/setAuthToken';
import { GlobalStyle } from '../theme/GlobalStyle';

// Add fontAwesome Brand Icons
library.add(fab, faGlobe);

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

const App = () => (
  <HttpsRedirect>
    <Router>
      <Provider store={store}>
        <ThemeWrapper>
          <Layout style={{ height: '100vh' }}>
            <Routes />
            <GlobalStyle />
          </Layout>
        </ThemeWrapper>
      </Provider>
    </Router>
  </HttpsRedirect>
);

export default withNamespaces('common')(App);
