import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import PrivateRoute from '../components/common/PrivateRoute';

const CustomRoute = ({ path, exact, isPrivate, main }) =>
  isPrivate ? (
    <PrivateRoute key={path} path={path} exact={exact} component={main} />
  ) : (
    <Route key={path} path={path} exact={exact} component={main} />
  );

CustomRoute.propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  isPrivate: PropTypes.bool.isRequired,
  main: PropTypes.func.isRequired,
};

export default CustomRoute;
