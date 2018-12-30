/* eslint-disable react/no-unused-state */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loginUser } from '../redux/modules/auth';

import LoginPresenter from './login/LoginPresenter';

class Login extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/explore');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/explore');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const { loginUser, errors, loading } = this.props;
    return <LoginPresenter loginUser={loginUser} errors={errors} loading={loading} />;
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  auth: state.auth,
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { loginUser },
)(Login);
