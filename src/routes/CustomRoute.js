import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../elements/Navigation/PrivateRoute';

const CustomRoute = ({ path, exact, isPrivate, main }) =>
  isPrivate ? (
    <Switch>
      <PrivateRoute key={path} path={path} exact={exact} component={main} />
    </Switch>
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
