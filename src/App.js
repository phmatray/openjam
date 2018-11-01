import React from 'react';
import HttpsRedirect from 'react-https-redirect';
import jwt_decode from 'jwt-decode';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { withNamespaces } from 'react-i18next';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import store from './redux/store';
import { updateUser, logoutUser } from './redux/modules/auth';
import { clearCurrentProfile } from './redux/modules/profile';
import setAuthToken from './utils/setAuthToken';

import Layout from './components/Layout';
import Routes from './components/Routes';

// Add fontAwesome Brand Icons
library.add(fab, faGlobe);

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
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
        <div className="App" style={{ height: '100vh' }}>
          <Layout>
            <Routes />
          </Layout>
        </div>
      </Provider>
    </Router>
  </HttpsRedirect>
);

export default withNamespaces('common')(App);
