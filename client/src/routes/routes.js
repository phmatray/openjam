import Dashboard from '../components/dashboard/Dashboard';
import CreateProfile from '../components/create-profile/CreateProfile';
import EditProfile from '../components/edit-profile/EditProfile';
import Profile from '../components/profile/Profile';
import Post from '../components/pages/Post/Post';

import Login from '../components/pages/Login';
import Register from '../components/pages/Register';
import Landing from '../components/pages/Landing';
import Share from '../components/pages/Share';
import Jammers from '../components/pages/Jammers';
import Playlist from '../components/pages/Playlist';
import Playlists from '../components/pages/Playlists';
import Track from '../components/pages/Track';
import Tracks from '../components/pages/Tracks';
import Artist from '../components/pages/Artist';
import Artists from '../components/pages/Artists';
import Albums from '../components/pages/Albums';
import Album from '../components/pages/Album';
import Labels from '../components/pages/Labels';
import Label from '../components/pages/Label';

const routes = [
  {
    path: '/',
    exact: true,
    isPrivate: false,
    main: Landing,
  },
  {
    path: '/register',
    exact: true,
    isPrivate: false,
    main: Register,
  },
  {
    path: '/login',
    exact: true,
    isPrivate: false,
    main: Login,
  },
  {
    path: '/jammers',
    exact: true,
    isPrivate: false,
    main: Jammers,
  },
  {
    path: '/profile/:handle',
    exact: true,
    isPrivate: false,
    main: Profile,
  },
  {
    path: '/playlists',
    exact: true,
    isPrivate: false,
    main: Playlists,
  },
  {
    path: '/playlist/:id',
    exact: true,
    isPrivate: false,
    main: Playlist,
  },
  {
    path: '/tracks',
    exact: true,
    isPrivate: false,
    main: Tracks,
  },
  {
    path: '/track/:id',
    exact: true,
    isPrivate: false,
    main: Track,
  },
  {
    path: '/artists',
    exact: true,
    isPrivate: false,
    main: Artists,
  },
  {
    path: '/artist/:id',
    exact: true,
    isPrivate: false,
    main: Artist,
  },
  {
    path: '/albums',
    exact: true,
    isPrivate: false,
    main: Albums,
  },
  {
    path: '/album/:id',
    exact: true,
    isPrivate: false,
    main: Album,
  },
  {
    path: '/labels',
    exact: true,
    isPrivate: false,
    main: Labels,
  },
  {
    path: '/label/:id',
    exact: true,
    isPrivate: false,
    main: Label,
  },
  {
    path: '/share',
    exact: true,
    isPrivate: false,
    main: Share,
  },
  {
    path: '/dashboard',
    exact: true,
    isPrivate: true,
    main: Dashboard,
  },
  {
    path: '/create-profile',
    exact: true,
    isPrivate: true,
    main: CreateProfile,
  },
  {
    path: '/edit-profile',
    exact: true,
    isPrivate: true,
    main: EditProfile,
  },
  {
    path: '/post/:id',
    exact: true,
    isPrivate: true,
    main: Post,
  },
];

export default routes;
