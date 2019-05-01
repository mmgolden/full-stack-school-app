import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { Consumer } from './Context';
import theme from '../theme';
import Header from './Header';
import Container from './Container';
import ActionBar from './ActionBar';

// Provides the "Course Detail" screen by retrieving the detail for a course
class CourseDetail extends Component {
  state = {
    course: {},
  };

  // Runs immediately after the component is mounted
  componentDidMount() {
    const { match } = this.props;
    this.getCourse(match.params.id);
  }

  /*
  * Get the course details
  * @param {String} id - The id for the course
  * @returns {Object} Returns the course
  */
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

  /*
  * Format the description to be multiple paragraphs
  * @param {String} description - The description for the course
  * @returns {Array} Returns an array of the individual paragraphs
  */
  formatDescription = (description) => {
    if (!description) return '';
    return description.split('\\n\\n');
  }

  /*
  * Format the materials needed to be list items
  * @param {String} materials - The materials for the course
  * @returns {Array} Returns an array of the individual materials needed
  */
  formatMaterials = (materials) => {
    if (!materials) return '';
    return materials.replace(/\n/ig, '').split('* ');
  }

  render() {
    const { course } = this.state;
    const {
      title, description, estimatedTime, materialsNeeded,
    } = course;
    const { user } = course;

    const formattedDesc = this.formatDescription(description);
    const formattedMaterials = this.formatMaterials(materialsNeeded);

    return (
      <>
        <Header />
        <Consumer>
          {({ user: authUser }) => (
            <ActionBar
              authUser={authUser}
              courseOwner={user}
              id={course._id}
            />
          )}
        </Consumer>
        <Container>
          <CourseGrid>
            <CourseDescription>
              {/* Course title */}
              <h4>Course</h4>
              <h3>{title}</h3>
              {/* Course owner */}
              {user && (
                <p>
                  By
                  {` ${user.firstName} ${user.lastName}`}
                </p>
              )}
              {/* Course description */}
              {description
                && formattedDesc.map(paragraph => <p key={paragraph}>{paragraph}</p>)
              }
            </CourseDescription>
            <CourseDetails>
              {/* Estimated time */}
              <h4>Estimated Time</h4>
              <Separator />
              <h3>{estimatedTime}</h3>
              {/* Course materials */}
              <h4>Materials Needed</h4>
              <Separator />
              <ul>
                {materialsNeeded
                  && formattedMaterials.map(material => (material.length > 0 ? <li key={material}>{material}</li> : ''))}
              </ul>
            </CourseDetails>
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

const CourseDescription = styled.main`
  background: #fff;
  border-radius: 2px;
  padding: 20px;
  box-shadow: 0 2px 2px rgba(102,119,136,.3);
  margin-bottom: 30px;

  h4 {
    color: #bababa;
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 0.875rem;
    text-transform: uppercase;
  }

  h3 {
    font-size: 1.5rem;
    margin: 0;
    font-weight: 300;
  }

  p {
    line-height: 1.75;
  }
`;

const CourseDetails = styled.aside`
  background: ${theme.primaryColor};
  background: ${theme.primaryGradient};
  padding: 20px;
  border-radius: 2px;
  box-shadow: 0 2px 2px rgba(102,119,136,.3);
  color: #fff;
  margin-bottom: 30px;

  h4 {
    text-transform: uppercase;
    font-size: 0.875rem;
    margin-top: 0;
    margin-bottom: 5px;
  }

  h3 {
    margin-top: 0;
    margin-bottom: 30px;
    font-weight: 400;
  }

  p {
    font-weight: 400;
  }

  ul {
    padding-left: 0;
    list-style: none;

    li {
      margin-bottom: 15px;
    }
  }
`;

const Separator = styled.hr`
  border-color: rgba(255,255,255,0.3);
  margin-bottom: 10px;
`;

export default CourseDetail;
