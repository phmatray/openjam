import React from 'react';
import { Button } from 'semantic-ui-react';

const Loading = ({ error, retry, timedOut, pastDelay }) => {
  if (error) {
    return (
      <div>
        Error! <Button onClick={retry}>Retry</Button>
      </div>
    );
  } else if (timedOut) {
    return (
      <div>
        Taking a long time... <Button onClick={retry}>Retry</Button>
      </div>
    );
  } else if (pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
};

export default Loading;
