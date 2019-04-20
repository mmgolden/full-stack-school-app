import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Container from './Container';
import Card from './Card';

// Provides the "Courses" screen by retrieving the list of courses
class Courses extends Component {
  state = {
    courses: [],
  };

  // Runs immediately after the component is mounted
  componentDidMount() {
    this.getCourses();
  }

  // Get the courses from the API
  getCourses = () => {
    axios.get('http://localhost:5000/api/courses')
      .then((res) => {
        const courses = res.data;
        this.setState({ courses });
        console.log(courses);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { courses } = this.state;
    return (
      <Container>
        <CoursesGrid>
          {/*  Display the courses */}
          {courses.map(course => (
            <Card
              link={`/courses/${course._id}`}
              label="Course"
              title={course.title}
              key={course._id}
            />
          ))}
          {/*  New course card */}
          <Card link="/courses/create" newCourse />
        </CoursesGrid>
      </Container>
    );
  }
}

const CoursesGrid = styled.div`
  display: grid;

  @media (min-width:768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 30px;
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default Courses;
