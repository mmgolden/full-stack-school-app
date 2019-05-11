import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import { Context } from './Context';
import Header from './Header';
import Container from './Container';
import Flex from './Flex';
import Button from './Button';
import Form from './Form';
import Error from './Error';
import { handleError } from '../helpers';

// Provides the "Update Course" screen by rendering a form
class UpdateCourse extends Component {
  state = {
    courseId: '',
    title: '',
    description: '',
    estimatedTime: '',
    materialsNeeded: '',
    user: {},
    error: {},
  };

  // Title input ref
  titleRef = React.createRef();

  // Description text area ref
  descRef = React.createRef();

  // Estimate time input ref
  timeRef = React.createRef();

  // Materials text area ref
  materialsRef = React.createRef();

  // Runs immediately after the component is mounted
  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const { user } = this.context;
    this.setState({ user });
    this.getCourse(id);
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
        const { user } = this.state;

        if (user._id === course.user._id) {
          this.setState({
            courseId: course._id,
            title: course.title,
            description: course.description,
            estimatedTime: course.estimatedTime,
            materialsNeeded: course.materialsNeeded,
          });
        } else {
          const { history } = this.props;
          history.push('/forbidden');
        }
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
  * Updates the course
  * @param {Object} user - The current user
  * @param {String} id - The id for the course
  */
  updateCourse = (user, id) => {
    const {
      title, description, estimatedTime, materialsNeeded,
    } = this.state;
    const { emailAddress, password } = user;
    axios({
      method: 'put',
      url: `http://localhost:5000/api/courses/${id}`,
      auth: {
        username: emailAddress,
        password,
      },
      data: {
        title,
        description,
        estimatedTime,
        materialsNeeded,
      },
    })
      .then(() => {
        const { history } = this.props;
        history.push(`/courses/${id}`);
      })
      .catch((error) => {
        this.setState({
          error: error.response,
        });
        handleError(error, this.props);
      });
  }

  // Update the state based on user input
  handleChange = () => {
    this.setState({
      title: this.titleRef.current.value,
      description: this.descRef.current.value,
      estimatedTime: this.timeRef.current.value,
      materialsNeeded: this.materialsRef.current.value,
    });
  }

  /*
  * Handles the form submission
  * @param {Object} event - The event object
  * @param {Object} user - The current user
  */
  handleSubmit = (event, user) => {
    event.preventDefault();
    const { courseId } = this.state;
    this.updateCourse(user, courseId);
  }

  /*
  * Shows a message if there is a validation error
  * @returns {String} - The error message
  */
  showError = () => {
    const { title, description } = this.state;
    if (title === '') { return 'Please provide a value for "Title"'; }
    if (description === '') { return 'Please provide a value for "Description"'; }
    return null;
  }

  render() {
    const {
      title, description, estimatedTime, materialsNeeded, error, user,
    } = this.state;
    return (
      <>
        <Header {...this.props} />
        <Container>
          <UpdateCourseForm>
            <h1>Update Course</h1>
            <Error>{error.status === 400 && this.showError() }</Error>
            <form onSubmit={(event) => {
              this.handleSubmit(event, user);
            }}
            >
              <FormGrid>
                <div>
                  <h4>Course</h4>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    value={title && title}
                    ref={this.titleRef}
                    onChange={this.handleChange}
                    placeholder="Course title..."
                    aria-label="Title"
                  />
                  <p>{user && `By ${user.firstName} ${user.lastName}`}</p>
                  <textarea
                    id="description"
                    name="description"
                    value={description && description}
                    ref={this.descRef}
                    onChange={this.handleChange}
                    placeholder="Course description..."
                    aria-label="Description"
                  />
                </div>
                <div>
                  <h4>Estimated Time</h4>
                  <input
                    id="estimatedTime"
                    name="estimatedTime"
                    type="text"
                    value={estimatedTime && estimatedTime}
                    ref={this.timeRef}
                    onChange={this.handleChange}
                    placeholder="Hours"
                    aria-label="Estimated Time"
                  />
                  <h4>Materials Needed</h4>
                  <textarea
                    id="materialsNeeded"
                    name="materialsNeeded"
                    value={materialsNeeded && materialsNeeded}
                    ref={this.materialsRef}
                    onChange={this.handleChange}
                    placeholder="List materials..."
                    aria-label="Materials Needed"
                  />
                </div>
                <Flex row>
                  <FormButton buttonType="submit">Update Course</FormButton>
                  <FormButton buttonType="link" link="/" outline>Cancel</FormButton>
                </Flex>
              </FormGrid>
            </form>
          </UpdateCourseForm>
        </Container>
      </>
    );
  }
}

const UpdateCourseForm = styled(Form)`
  h4 {
    color: #bababa;
    margin-top: 0;
    margin-bottom: 15px;
    font-size: 1.125rem;
    text-transform: uppercase;
  }

  textarea {
    min-height: 200px;
  }

  p {
    margin-top: 0;
    font-size: 1.125rem;
  }
`;

const FormGrid = styled.div`
  display: grid;

  @media (min-width:768px) {
    grid-template-columns: 2fr 1fr;
    grid-column-gap: 30px;
  }

  @media (min-width: 992px) {
    grid-template-columns: 3fr 1fr;
  }
`;

const FormButton = styled(Button)`
  margin-right: 15px;
`;

UpdateCourse.contextType = Context;

export default withRouter(UpdateCourse);
