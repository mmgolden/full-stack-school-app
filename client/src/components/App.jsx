import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlus, faUserPlus, faSignInAlt, faSignOutAlt, faChevronLeft, faArrowLeft, faTimes,
} from '@fortawesome/free-solid-svg-icons';

import PrivateRoute from './PrivateRoute';
import Courses from './Courses';
import CourseDetail from './CourseDetail';
import UserSignIn from './UserSignIn';
import UserSignUp from './UserSignUp';
import CreateCourse from './CreateCourse';
import UpdateCourse from './UpdateCourse';
import UserSignOut from './UserSignOut';
import NotFound from './NotFound';
import Forbidden from './Forbidden';
import UnhandledError from './UnhandledError';

// Font awesome library
library.add(faPlus, faUserPlus, faSignInAlt, faSignOutAlt, faChevronLeft, faArrowLeft, faTimes);

// Main container component
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Courses} />
      <PrivateRoute path="/courses/create" component={CreateCourse} />
      <PrivateRoute path="/courses/:id/update" component={UpdateCourse} />
      <Route path="/courses/:id" component={CourseDetail} />
      <Route path="/signin" component={UserSignIn} />
      <Route path="/signup" component={UserSignUp} />
      <Route path="/signout" component={UserSignOut} />
      <Route path="/forbidden" component={Forbidden} />
      <Route path="/error" component={UnhandledError} />
      <Route path="/notfound" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
