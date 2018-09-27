import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { updateUser, logoutUser } from './redux/modules/auth';
import { clearCurrentProfile } from './redux/modules/profile';

import { Provider } from 'react-redux';
import store from './redux/store';

import Layout from './components/layout/Layout';
import NotFound from './components/not-found/NotFound';
import CustomRoutes from './routes/CustomRoutes';

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
  <Provider store={store}>
    <Router>
      <div className="App" style={{ height: '100vh' }}>
        <Layout>
          <Switch>
            <CustomRoutes />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </div>
    </Router>
  </Provider>
);

export default App;
