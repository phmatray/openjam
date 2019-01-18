// @flow

import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { actions, getSidebarVisible } from '../reducers/ui/layout';
import { getPlaying } from '../reducers/ui/player';

import LayoutPresenter from '../components/layout/LayoutPresenter';
import { getIsAuthenticated, getUser } from '../reducers/auth';

type Props = {
  sidebarVisible: boolean,
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
    actions,
  )(Layout),
);
