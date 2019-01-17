// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import AuthenticatedRoute from './routes/AuthenticatedRoute';
import Loading from './routes/Loading';
import Search from '../views/Search';

const AsyncLogin = Loadable({
  loader: () => import('../views/Login'),
  loading: Loading,
  timeout: 10000,
});

const AsyncRegister = Loadable({
  loader: () => import('../views/Register'),
  loading: Loading,
  timeout: 10000,
});

const AsyncRegisterThanks = Loadable({
  loader: () => import('../views/RegisterThanks'),
  loading: Loading,
  timeout: 10000,
});

const AsyncActivateAccount = Loadable({
  loader: () => import('../views/ActivateAccount'),
  loading: Loading,
  timeout: 10000,
});

const AsyncActivateAccountSuccess = Loadable({
  loader: () => import('../views/ActivateAccountSuccess'),
  loading: Loading,
  timeout: 10000,
});

const AsyncLanding = Loadable({
  loader: () => import('../views/Landing'),
  loading: Loading,
  timeout: 10000,
});

const AsyncExplore = Loadable({
  loader: () => import('../views/Explore'),
  loading: Loading,
  timeout: 10000,
});

const AsyncShare = Loadable({
  loader: () => import('../views/Share'),
  loading: Loading,
  timeout: 10000,
});

const AsyncJammers = Loadable({
  loader: () => import('../views/Jammers'),
  loading: Loading,
  timeout: 10000,
});

const AsyncJammer = Loadable({
  loader: () => import('../views/Jammer'),
  loading: Loading,
  timeout: 10000,
});

const AsyncPlaylists = Loadable({
  loader: () => import('../views/Playlists'),
  loading: Loading,
  timeout: 10000,
});

const AsyncPlaylist = Loadable({
  loader: () => import('../views/Playlist'),
  loading: Loading,
  timeout: 10000,
});

const AsyncTracks = Loadable({
  loader: () => import('../views/Tracks'),
  loading: Loading,
  timeout: 10000,
});

const AsyncOriginalTracks = Loadable({
  loader: () => import('../views/OriginalTracks'),
  loading: Loading,
  timeout: 10000,
});

const AsyncRemixTracks = Loadable({
  loader: () => import('../views/RemixTracks'),
  loading: Loading,
  timeout: 10000,
});

const AsyncTrack = Loadable({
  loader: () => import('../views/Track'),
  loading: Loading,
  timeout: 10000,
});

const AsyncArtists = Loadable({
  loader: () => import('../views/Artists'),
  loading: Loading,
  timeout: 10000,
});

const AsyncArtist = Loadable({
  loader: () => import('../views/Artist'),
  loading: Loading,
  timeout: 10000,
});

const AsyncAlbums = Loadable({
  loader: () => import('../views/Albums'),
  loading: Loading,
  timeout: 10000,
});

const AsyncAlbum = Loadable({
  loader: () => import('../views/Album'),
  loading: Loading,
  timeout: 10000,
});

const AsyncLabels = Loadable({
  loader: () => import('../views/Labels'),
  loading: Loading,
  timeout: 10000,
});

const AsyncLabel = Loadable({
  loader: () => import('../views/Label'),
  loading: Loading,
  timeout: 10000,
});

const AsyncDashboard = Loadable({
  loader: () => import('../views/Dashboard'),
  loading: Loading,
  timeout: 10000,
});

const AsyncCreateProfile = Loadable({
  loader: () => import('../views/CreateProfile'),
  loading: Loading,
  timeout: 10000,
});

const AsyncEditProfile = Loadable({
  loader: () => import('../views/EditProfile'),
  loading: Loading,
  timeout: 10000,
});

const AsyncNotFound = Loadable({
  loader: () => import('../views/NotFound'),
  loading: Loading,
  timeout: 10000,
});

const Routes = ({ childProps }) => (
  <Switch>
    <Route path="/" exact component={AsyncLanding} props={childProps} />
    <Route path="/login" exact component={AsyncLogin} props={childProps} />
    <Route path="/register" exact component={AsyncRegister} props={childProps} />
    <Route path="/register-thanks" exact component={AsyncRegisterThanks} props={childProps} />
    <Route path="/activate" exact component={AsyncActivateAccount} props={childProps} />
    <Route
      path="/activate-success"
      exact
      component={AsyncActivateAccountSuccess}
      props={childProps}
    />
    <Route path="/explore" exact component={AsyncExplore} props={childProps} />
    <Route path="/share" exact component={AsyncShare} props={childProps} />
    <Route path="/search/:filter?" exact component={Search} />
    <Route path="/jammers" exact component={AsyncJammers} props={childProps} />
    <Route path="/jammer/:handle" exact component={AsyncJammer} props={childProps} />
    <Route path="/playlists" exact component={AsyncPlaylists} props={childProps} />
    <Route path="/playlist/:id" exact component={AsyncPlaylist} props={childProps} />
    <Route path="/tracks" exact component={AsyncTracks} props={childProps} />
    <Route path="/tracks/originals" exact component={AsyncOriginalTracks} props={childProps} />
    <Route path="/tracks/remixes" exact component={AsyncRemixTracks} props={childProps} />
    <Route path="/track/:id" exact component={AsyncTrack} props={childProps} />
    <Route path="/artists" exact component={AsyncArtists} props={childProps} />
    <Route path="/artist/:id" exact component={AsyncArtist} props={childProps} />
    <Route path="/albums" exact component={AsyncAlbums} props={childProps} />
    <Route path="/album/:id" exact component={AsyncAlbum} props={childProps} />
    <Route path="/labels" exact component={AsyncLabels} props={childProps} />
    <Route path="/label/:id" exact component={AsyncLabel} props={childProps} />
    <AuthenticatedRoute
      path="/dashboard/:tabKey?"
      exact
      component={AsyncDashboard}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/create-profile"
      exact
      component={AsyncCreateProfile}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/edit-profile"
      exact
      component={AsyncEditProfile}
      props={childProps}
    />

    {/* Finally, catch all unmatched routes */}
    <Route component={AsyncNotFound} />
  </Switch>
);

export default Routes;
