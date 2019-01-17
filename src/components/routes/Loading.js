// @flow

import React from 'react';
import { Button } from 'semantic-ui-react';

type Props = {
  retry: () => void,
  timedOut: any,
  pastDelay: any,
  error?: any,
};

const Loading = ({ error, retry, timedOut, pastDelay }: Props) => {
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

Loading.defaultProps = {
  error: null,
};

export default Loading;
