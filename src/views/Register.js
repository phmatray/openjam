// @flow
/* eslint-disable react/no-unused-state */

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { registerUser, getIsAuthenticated, getLoading } from '../reducers/auth';
import { getErrors } from '../reducers/data/error';

import RegisterPresenter from './register/RegisterPresenter';

type Props = {
  registerUser: () => void,
  errors: {},
  isAuthenticated: boolean,
  loading: boolean,
  history: any,
};

class Register extends PureComponent<Props> {
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

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
  loading: getLoading(state),
  errors: getErrors(state),
});

export default withRouter(
  connect(
    mapStateToProps,
    { registerUser },
  )(Register),
);
