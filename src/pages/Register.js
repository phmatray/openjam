/* eslint-disable react/no-unused-state */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { registerUser } from '../redux/modules/auth';

import RegisterPresenter from './register/RegisterPresenter';

class Register extends Component {
  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.history.push('/explore');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const { registerUser, errors, loading, history } = this.props;
    return (
      <RegisterPresenter
        registerUser={registerUser}
        errors={errors}
        loading={loading}
        history={history}
      />
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  errors: state.errors,
});

export default withRouter(
  connect(
    mapStateToProps,
    { registerUser },
  )(Register),
);
