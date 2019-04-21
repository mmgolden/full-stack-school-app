import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Container from './Container';
import ActionBar from './ActionBar';

// Provides the "Course Detail" screen by retrieving the detail for a course
class CourseDetail extends Component {
  state = {
    course: [],
  };

  // Runs immediately after the component is mounted
  componentDidMount() {
    this.getCourse('57029ed4795118be119cc440');
  }

  // Get the course from the API
  getCourse = (id) => {
    axios.get(`http://localhost:5000/api/courses/${id}`)
      .then((res) => {
        const course = res.data;
        this.setState({ course });
        console.log('course', course);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { course } = this.state;
    const {
      title, description, estimatedTime, materialsNeeded,
    } = course;
    return (
      <>
        <ActionBar />
        <Container>
          <CourseGrid>
            <main>
              <h4>Course</h4>
              <h3>{title}</h3>
              <p>{description}</p>
            </main>
            <aside>
              <h4>Estimated time</h4>
              <h3>{estimatedTime}</h3>
              <h4>Materials Needed</h4>
              <p>{materialsNeeded}</p>
            </aside>
          </CourseGrid>
        </Container>
      </>
    );
  }
}

const CourseGrid = styled.div`
  display: grid;

  @media (min-width:768px) {
    grid-template-columns: 2fr 1fr;
    grid-column-gap: 30px;
  }

  @media (min-width: 992px) {
    grid-template-columns: 3fr 1fr;
  }
`;

export default CourseDetail;
