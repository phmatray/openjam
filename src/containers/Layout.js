// @flow

import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import LayoutPresenter from '../components/layout/LayoutPresenter';
import { getSidebarVisible } from '../reducers/ui/layout';
import { showSidebar, hideSidebar, toggleSidebar } from '../actions/ui/layout';
import { getPlaying } from '../reducers/ui/player';
import { getIsAuthenticated, getUser } from '../reducers/auth';
import type { UserBasic } from '../types/index';

type Props = {
  sidebarVisible: boolean,
  playing: boolean,
  isAuthenticated: boolean,
  user: UserBasic,
  children: React.Node,
  showSidebar: () => void,
  hideSidebar: () => void,
  toggleSidebar: () => void,
};

const Layout = (props: Props) => <LayoutPresenter {...props} />;

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
  )(Layout),
);
