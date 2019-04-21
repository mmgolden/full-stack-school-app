import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlus, faUserPlus, faSignInAlt, faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

import Header from './Header';
// import Courses from './Courses';
import CourseDetail from './CourseDetail';

// Font awesome library
library.add(faPlus, faUserPlus, faSignInAlt, faChevronLeft);

// Main container component
class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Header />
        <CourseDetail />
      </>
    );
  }
}

export default App;
