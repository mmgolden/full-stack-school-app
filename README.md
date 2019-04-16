# Full Stack School App

This full stack application provides a way for users to administer a school database containing information about courses: users can interact with the database by retrieving a list of courses, viewing detail for a specific course, as well as creating, updating and deleting courses in the database. In addition, the project requires users to create an account and sign in to make changes to the database. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). This project was created for the purpose of the Treehouse Full Stack JavaScript Techdegree.

## Project Requirements

This project is reviewed and graded based on a set of requirements.

### Meets Expectations
* Project set up using create-react-app
* The React project's folder is named client
* No warnings or errors in console about unused/missing assets
* Running npm start launches the app
* The REST API project's folder is named api
* The REST API has been updated with support for Cross-Origin Resource Sharing (CORS)
* The app contains the following stateful class components:
* Courses - The component retrieves the list of courses from the REST API, renders a list of courses, links each course to its respective "Course Detail" screen, and renders a link to the "Create Course" screen
* CourseDetail - The component retrieves the detail for a course from the REST API, renders the course details, an "Update Course" button for navigating to the "Update Course" screen, and a "Delete Course" button that when clicked sends a DELETE request to the REST API to delete a course
* UserSignIn - The component renders a form allowing the user to sign using their existing account information, a "Sign In" button that when clicked signs in the user, and a "Cancel" button that returns the user to the default route (i.e. the list of courses)
* UserSignUp - The component renders a form allowing a user to sign up by creating a new account, a "Sign Up" button that when clicked sends a POST request to the REST API's /api/users route and signs in the user, and a "Cancel" button that returns the user to the default route (i.e. the list of courses)
* CreateCourse - The component renders a form allowing a user to create a new course, a "Create Course" button that when clicked sends a POST request to the REST API's /api/courses route, and a "Cancel" button that returns the user to the default route (i.e. the list of courses)
* UpdateCourse - The component renders a form allowing a user to update one of their existing courses, an "Update Course" button that when clicked sends a PUT request to the REST API's /api/courses/:id route, and a "Cancel" button that returns the user to the "Course Detail" screen
* The app contains the following stateless functional components:
* Header- The component renders the top menu bar and buttons for signing in and signing up (if there's not an authenticated user) or the user's first and last name and a button for signing out (if there's an authenticated user)
* UserSignOut - The component signs out the authenticated user and redirects the user to the default route (i.e. the list of courses)
* The react-router-dom npm package is installed and listed as a dependency in the package.json file
* Clicking a link navigates the user to the correct route and displays the appropriate info
* The current route is always reflected in the URL
* The following routes are configured (listed in the format path - component): / - Courses, /courses/create - CreateCourse, /courses/:id/update - UpdateCourse, /courses/:id - CourseDetail, /signin - UserSignIn, /signup - UserSignUp, /signout - UserSignOut
* The app's global state is kept in the App component or managed using the React Context API
* A signIn() method is globally available that: authenticates a user using their email address and password, persists the authenticated user's information (including their password) in the global state
* A signOut() method is globally available that removes the authenticated user's information (including their password) from the global state
* The app contains a higher-order component (HOC) named PrivateRoute that is used to configure protected routes (i.e. routes that require authentication)
* The following routes are configured using the PrivateRoute component: /courses/create, /courses/:id/update
* The CourseDetail component only renders the "Update Course" and "Delete Course" buttons if: there's an authenticated user, the authenticated user's ID matches that of the user who owns the course
* The "Sign Up", "Create Course", and "Update Course" screens display validation errors returned from the REST API
* The "Course Detail" screen renders the course description and materialsNeeded properties as markdown formatted text
* Provided HTML and CSS is used and the important aspects of the app generally resemble the mockups
* Free of syntax errors
* Detailed code comments explaining how your functions work

### Exceeds Expectations
* The CourseDetail component redirects users to the /notfound path if the requested course isn't returned from the REST API
* The UserSignIn component redirects users back to the previous screen after successfully signing in
* The UpdateCourse component:
* Redirects users to the /notfound path if the requested course isn't returned from the REST API
* Redirects users to the /forbidden path if the requested course isn't owned by the authenticated user
* Components redirect users to the /error path when requests to the REST API return a "500 Internal Server Error" HTTP status code
* The app contains the following stateless functional components:
* NotFound -The component renders a message letting the user know that the requested page can't be found
* Forbidden - The component renders a message letting the user know that they can't access the requested page
* UnhandledError - The component renders a message letting the user know that an unexpected error has occurred
* The following routes are configured (listed in the format path - component): /notfound - NotFound, /forbidden - Forbidden, /error - UnhandledError
* React Router is configured so that if a route isn't matched the NotFound component is rendered
* The app persists user credentials using an HTTP cookie or local storage so that the user's authenticated state is maintained even if the application is reloaded or loaded into a new browser tab

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
