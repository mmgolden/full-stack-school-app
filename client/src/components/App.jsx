import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';

class App extends Component {
  state = {};

  // Runs immediately after the App component is mounted
  componentDidMount() {
    this.getCourses();
  }

  // Get the courses from the API
  getCourses = () => {
    axios.get('http://localhost:5000/api/courses')
      .then((res) => {
        const courses = res.data;
        console.log('courses', courses);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Header />
    );
  }
}

export default App;
