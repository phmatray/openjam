// @flow

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AuthenticatedRoute from 'views/components/AuthenticatedRoute';
import NotFound from 'views/routes/NotFound';

import routeConfigurations from './routes.config';

const Routes = () => (
  <Switch>
    {routeConfigurations.map(({ route }, i) =>
      route.authenticated ? (
        <AuthenticatedRoute {...route} key={i} />
      ) : (
        <Route {...route} key={i} />
      ),
    )}

    {/* Finally, catch all unmatched routes */}
    <Route path="/404" component={NotFound} />
    <Redirect to="/404" />
  </Switch>
);

export default Routes;
