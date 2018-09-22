import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { updateUser, logoutUser } from './redux/modules/auth';
import { clearCurrentProfile } from './redux/modules/profile';

import { Provider } from 'react-redux';
import store from './redux/store';

import PrivateRoute from './components/common/PrivateRoute';

import Layout from './components/layout/Layout';
import Landing from './components/landing/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/create-profile/CreateProfile';
import EditProfile from './components/edit-profile/EditProfile';
import Jammers from './components/Jammers';
import Profile from './components/profile/Profile';
import NotFound from './components/not-found/NotFound';
import Share from './components/share/Share';
import Post from './components/post/Post';
import Track from './components/track/Track';
import Tracks from './components/Tracks';
import Artists from './components/Artists';
import Labels from './components/Labels';

import './App.css';

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

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App" style={{ height: '100vh' }}>
            <Layout>
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/jammers" component={Jammers} />
                <Route exact path="/profile/:handle" component={Profile} />
                <Route exact path="/tracks" component={Tracks} />
                <Route exact path="/track/:id" component={Track} />
                <Route exact path="/artists" component={Artists} />
                <Route exact path="/labels" component={Labels} />
                <Route exact path="/share" component={Share} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute exact path="/create-profile" component={CreateProfile} />
                <PrivateRoute exact path="/edit-profile" component={EditProfile} />
                <PrivateRoute exact path="/post/:id" component={Post} />
                <Route component={NotFound} />
              </Switch>
            </Layout>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
