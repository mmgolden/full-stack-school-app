import React from 'react';

import { Consumer } from './Context';

// Signs out the authenticated user and redirects the user to the default route
const UserSignOut = props => (
  <Consumer>
    {({ actions }) => {
      actions.signOut();
      props.history.push('/');
    }}
  </Consumer>
);

export default UserSignOut;
