// @flow

import React from 'react';

type Props = {
  message: string,
  onRetry: () => void,
};

const FetchError = ({ message, onRetry }: Props) => (
  <div>
    <p>
      {'Could not fetch artists.'}
      {message}
    </p>
    <button type="button" onClick={onRetry}>
      Retry
    </button>
  </div>
);

export default FetchError;
