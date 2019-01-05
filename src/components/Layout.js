import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from '../redux/modules/layout';
import LayoutPresenter from './layout/LayoutPresenter';

const Layout = props => <LayoutPresenter {...props} />;

Layout.propTypes = {
  sidebarVisible: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  showSidebar: PropTypes.func.isRequired,
  hideSidebar: PropTypes.func.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  sidebarVisible: state.layout.sidebarVisible,
  playing: state.player.playing,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default withRouter(
  connect(
    mapStateToProps,
    actions,
  )(Layout),
);
