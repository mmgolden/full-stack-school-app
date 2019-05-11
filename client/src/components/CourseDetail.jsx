import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

import { Consumer } from './Context';
import theme from '../theme';
import Header from './Header';
import Container from './Container';
import ActionBar from './ActionBar';
import { handleError } from '../helpers';
import Modal from './Modal';

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
      })
      .catch((error) => {
        handleError(error, this.props);
        if (error.response) {
          const { history } = this.props;
          if (error.response.status === 404) { history.push('/notfound'); }
        }
      });
  }

  /*
  * Delete the course
  * @param {Object} user - The current user
  * @param {String} id - The course ID
  */
  deleteCourse = (user, id) => {
    const { emailAddress, password } = user;
    axios({
      method: 'delete',
      url: `http://localhost:5000/api/courses/${id}`,
      auth: {
        username: emailAddress,
        password,
      },
    })
      .then(() => {
        const { history } = this.props;
        history.push('/');
      })
      .catch((error) => {
        handleError(error, this.props);
      });
  }

  render() {
    const { course } = this.state;
    const {
      _id, title, description, estimatedTime, materialsNeeded, user,
    } = course;

    return (
      <>
        <Modal />
        <Header {...this.props} />
        <Consumer>
          {({ user: authUser }) => (
            <ActionBar
              authUser={authUser}
              courseOwner={user}
              id={_id}
              deleteCourse={() => this.deleteCourse(authUser, _id)}
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
              {description && <ReactMarkdown>{description}</ReactMarkdown>}
            </CourseDescription>
            <CourseDetails>
              {/* Estimated time */}
              <h4>Estimated Time</h4>
              <Separator />
              <h3>{estimatedTime}</h3>
              {/* Course materials */}
              <h4>Materials Needed</h4>
              <Separator />
              {materialsNeeded && <ReactMarkdown>{materialsNeeded}</ReactMarkdown>}
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
