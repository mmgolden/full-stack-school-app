export const handleError = (error, props) => {
  if (error.response) {
    console.error(`${error.response.status} Error: ${error.response.statusText}, ${error.response.data.message}`);
    if (error.response.status === 500) {
      const { history } = props;
      history.push('/error');
    }
  }
};

export default handleError;
