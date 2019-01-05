import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { actions, getSidebarVisible } from '../redux/modules/layout';
import { getPlaying } from '../redux/modules/player';

import LayoutPresenter from './layout/LayoutPresenter';
import { getIsAuthenticated, getUser } from '../redux/modules/auth';

const Layout = props => <LayoutPresenter {...props} />;

Layout.propTypes = {
  sidebarVisible: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  showSidebar: PropTypes.func.isRequired,
  hideSidebar: PropTypes.func.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

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
