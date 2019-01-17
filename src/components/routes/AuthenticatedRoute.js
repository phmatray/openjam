// @flow

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { getIsAuthenticated } from '../../reducers/auth';

type Props = {
  isAuthenticated: boolean,
};

const AuthenticatedRoute = ({ component: Component, isAuthenticated, ...rest }: Props) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated === true ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AuthenticatedRoute);
