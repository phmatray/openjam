import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getIsAuthenticated } from '../redux/modules/auth';

import LandingPresenter from './landing/LandingPresenter';

class Landing extends Component {
  componentDidMount() {
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      this.props.history.push('/explore');
    }
  }

  render() {
    return <LandingPresenter />;
  }
}

Landing.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Landing);
