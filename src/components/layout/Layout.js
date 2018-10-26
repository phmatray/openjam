import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { showSidebar, hideSidebar, toggleSidebar } from '../../redux/modules/layout';
import LayoutPresenter from './presenter';

class Layout extends Component {
  render() {
    return <LayoutPresenter {...this.props} />;
  }
}

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
    { showSidebar, hideSidebar, toggleSidebar },
  )(Layout),
);
