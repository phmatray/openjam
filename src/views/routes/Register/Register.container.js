// @flow
/* eslint-disable react/no-unused-state */

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { registerUser, getIsAuthenticated, getLoading } from 'store/modules/auth';
import { getErrors } from 'store/modules/data/error';

import Presenter from './Register.presenter';

type Props = {
  registerUser: () => void,
  errors: {},
  isAuthenticated: boolean,
  loading: boolean,
  history: any,
};

type State = {
  errors: any,
};

class Register extends PureComponent<Props, State> {
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
      <Presenter registerUser={registerUser} errors={errors} loading={loading} history={history} />
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
