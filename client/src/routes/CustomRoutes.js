import React from 'react';
import routes from './routes';
import CustomRoute from './CustomRoute';

const CustomRoutes = () => routes.map(route => <CustomRoute key={route.path} {...route} />);

export default CustomRoutes;
