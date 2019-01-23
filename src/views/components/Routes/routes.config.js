// @flow

import * as React from 'react';

import Search from 'views/routes/Search';
import Login from 'views/routes/Login';
import Register from 'views/routes/Register';
import RegisterThanks from 'views/routes/RegisterThanks';
import ActivateAccount from 'views/routes/ActivateAccount';
import ActivateAccountSuccess from 'views/routes/ActivateAccountSuccess';
import Landing from 'views/routes/Landing';
import Explore from 'views/routes/Explore';
import Share from 'views/routes/Share';
import Jammers from 'views/routes/Jammers';
import Jammer from 'views/routes/Jammer';
import Playlists from 'views/routes/Playlists';
import Playlist from 'views/routes/Playlist';
import Tracks from 'views/routes/Tracks';
import OriginalTracks from 'views/routes/OriginalTracks';
import RemixTracks from 'views/routes/RemixTracks';
import Track from 'views/routes/Track';
import Artists from 'views/routes/Artists';
import Artist from 'views/routes/Artist';
import Albums from 'views/routes/Albums';
import Album from 'views/routes/Album';
import Labels from 'views/routes/Labels';
import Label from 'views/routes/Label';
import Dashboard from 'views/routes/Dashboard';
import CreateProfile from 'views/routes/CreateProfile';
import EditProfile from 'views/routes/EditProfile';

type RouteConfigurations = {
  name: string,
  route: {
    path: string,
    exact: boolean,
    component: any,
    authenticated?: boolean,
  },
  components: {
    template: React.Node,
    item: React.Node,
  },
}[];

const routeConfigurations: RouteConfigurations = [
  {
    name: 'landing',
    route: {
      path: '/',
      exact: true,
      component: Landing,
    },
    components: {
      template: null,
      item: null,
    },
  },
  {
    name: 'login',
    route: {
      path: '/login',
      exact: true,
      component: Login,
    },
    components: {
      template: null,
      item: null,
    },
  },
  {
    name: 'register',
    route: {
      path: '/register',
      exact: true,
      component: Register,
    },
    components: {
      template: null,
      item: null,
    },
  },
  {
    name: 'registerThanks',
    route: {
      path: '/register/thanks',
      exact: true,
      component: RegisterThanks,
    },
    components: {
      template: null,
      item: null,
    },
  },
  {
    name: 'activateAccount',
    route: {
      path: '/activate',
      exact: true,
      component: ActivateAccount,
    },
    components: {
      template: null,
      item: null,
    },
  },
  {
    name: 'activateAccountSuccess',
    route: {
      path: '/activate/success',
      exact: true,
      component: ActivateAccountSuccess,
    },
    components: {
      template: null,
      item: null,
    },
  },
  {
    name: 'explore',
    route: {
      path: '/explore',
      exact: true,
      component: Explore,
    },
    components: {
      template: null,
      item: null,
    },
  },
  {
    name: 'share',
    route: {
      path: '/share',
      exact: true,
      component: Share,
    },
    components: {
      template: null,
      item: null,
    },
  },
  {
    name: 'album',
    route: {
      path: '/album/:id',
      exact: true,
      component: Album,
    },
    components: {
      template: null,
      item: null,
    },
  },
  {
    name: 'albums',
    route: {
      path: '/albums',
      exact: true,
      component: Albums,
    },
    components: {
      template: null,
      item: null,
    },
  },
  {
    name: 'artist',
    route: {
      path: '/artist/:id',
      exact: true,
      component: Artist,
    },
    components: {
      template: null,
      item: null,
    },
  },
  {
    name: 'artists',
    route: {
      path: '/artists',
      exact: true,
      component: Artists,
    },
    components: {
      template: null,
      item: null,
    },
  },
  {
    name: 'jammer',
    route: {
      path: '/jammer/:handle',
      exact: true,
      component: Jammer,
    },
    components: {
      template: null,
      item: null,
    },
  },
  {
    name: 'jammers',
    route: {
      path: '/jammers',
      exact: true,
      component: Jammers,
    },
    components: {
      template: null,
      item: null,
    },
  },
  {
    name: 'label',
    route: {
      path: '/label/:id',
      exact: true,
      component: Label,
    },
    components: {
      template: null,
      item: null,
    },
  },
  {
    name: 'labels',
    route: {
      path: '/labels',
      exact: true,
      component: Labels,
    },
    components: {
      template: null,
      item: null,
    },
  },
  {
    name: 'originalTracks',
    route: {
      path: '/tracks/originals',
      exact: true,
      component: OriginalTracks,
    },
    components: {
      template: null,
      item: null,
    },
  },
  {
    name: 'playlist',
    route: {
      path: '/playlist/:id',
      exact: true,
      component: Playlist,
    },
    components: {
      template: null,
      item: null,
    },
  },
  {
    name: 'playlists',
    route: {
      path: '/playlists',
      exact: true,
      component: Playlists,
    },
    components: {
      template: null,
      item: null,
    },
  },
  {
    name: 'remixTracks',
    route: {
      path: '/tracks/remixes',
      exact: true,
      component: RemixTracks,
    },
    components: {
      template: null,
      item: null,
    },
  },
  {
    name: 'search',
    route: {
      path: '/search/:filter?',
      exact: true,
      component: Search,
    },
    components: {
      template: null,
      item: null,
    },
  },
  {
    name: 'track',
    route: {
      path: '/track/:id',
      exact: true,
      component: Track,
    },
    components: {
      template: null,
      item: null,
    },
  },
  {
    name: 'tracks',
    route: {
      path: '/tracks',
      exact: true,
      component: Tracks,
    },
    components: {
      template: null,
      item: null,
    },
  },
  {
    name: 'dashboard',
    route: {
      path: '/dashboard/:tabKey?',
      exact: true,
      component: Dashboard,
      authenticated: true,
    },
    components: {
      template: null,
      item: null,
    },
  },
  {
    name: 'createProfile',
    route: {
      path: '/profile/create',
      exact: true,
      component: CreateProfile,
      authenticated: true,
    },
    components: {
      template: null,
      item: null,
    },
  },
  {
    name: 'editProfile',
    route: {
      path: '/profile/edit',
      exact: true,
      component: EditProfile,
      authenticated: true,
    },
    components: {
      template: null,
      item: null,
    },
  },
];

export default routeConfigurations;
