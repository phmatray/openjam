// @flow
/* eslint-disable react/no-unused-state */

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { loginUser, getIsAuthenticated, getLoading } from '../reducers/auth';

import LoginPresenter from './login/LoginPresenter';
import { getErrors } from '../reducers/data/error';

type Props = {
  loginUser: () => void,
  isAuthenticated: boolean,
  loading: boolean,
  errors: {},
  history: any,
};

class Login extends PureComponent<Props> {
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

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
  loading: getLoading(state),
  errors: getErrors(state),
});

export default connect(
  mapStateToProps,
  { loginUser },
)(Login);
