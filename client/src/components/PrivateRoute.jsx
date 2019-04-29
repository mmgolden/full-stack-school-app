import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Consumer } from './Context';

/*
* Renders the component if there's an authenticated user or redirects the user to the /signin route
* @param {Object} Component - The component to be rendered
* @returns {Object} Returns a Route
*/
const PrivateRoute = ({ component: Component, path }) => (
  <Route
    path={path}
    render={() => (
      <Consumer>
        {({ user }) => (
          user.emailAddress && user.password ? (
            <Component />
          ) : (
            <Redirect to="/signin" />
          )
        )}
      </Consumer>
    )}
  />
);

export default PrivateRoute;
