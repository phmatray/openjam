import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const Loading = ({ error, retry, timedOut, pastDelay }) => {
  if (error) {
    return (
      <div>
        Error!
        <br />
        <Button onClick={retry}>Retry</Button>
      </div>
    );
  }
  if (timedOut) {
    return (
      <div>
        Taking a long time...
        <br />
        <Button onClick={retry}>Retry</Button>
      </div>
    );
  }
  if (pastDelay) {
    return <div>Loading...</div>;
  }
  return null;
};

Loading.propTypes = {
  error: PropTypes.any,
  retry: PropTypes.func.isRequired,
  timedOut: PropTypes.any.isRequired,
  pastDelay: PropTypes.any.isRequired,
};

export default Loading;
