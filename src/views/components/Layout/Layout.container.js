// @flow

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  showSidebar,
  hideSidebar,
  toggleSidebar,
  getSidebarVisible,
} from 'store/modules/ui/layout';
import { getPlaying } from 'store/modules/ui/player';
import { getIsAuthenticated, getUser } from 'store/modules/auth';

import Presenter from './Layout.presenter';

const mapStateToProps = state => ({
  sidebarVisible: getSidebarVisible(state),
  playing: getPlaying(state),
  isAuthenticated: getIsAuthenticated(state),
  user: getUser(state),
});

export default withRouter(
  connect(
    mapStateToProps,
    { showSidebar, hideSidebar, toggleSidebar },
  )(Presenter),
);
