/* eslint-disable react/no-unused-state */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loginUser, getIsAuthenticated, getLoading } from '../reducers/auth';

import LoginPresenter from './login/LoginPresenter';
import { getErrors } from '../reducers/data/error';

class Login extends PureComponent {
  componentDidMount() {
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      this.props.history.push('/explore');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuthenticated) {
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
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
  loading: getLoading(state),
  errors: getErrors(state),
});

export default connect(
  mapStateToProps,
  { loginUser },
)(Login);
