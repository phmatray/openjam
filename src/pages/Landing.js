import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LandingPresenter from './landing/LandingPresenter';

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/share');
    }
  }

  render() {
    return <LandingPresenter />;
  }
}

Landing.propTypes = {
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Landing);
