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
import { updateUser, logoutUser } from '../redux/modules/auth';
import { clearCurrentProfile } from '../redux/modules/profile';
import setAuthToken from '../utils/setAuthToken';
import { GlobalStyle } from '../theme/GlobalStyle';

// Add fontAwesome Brand Icons
library.add(fab, faGlobe);

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwtDecode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(updateUser(decoded));

  // Check for expire token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentProfile());
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
