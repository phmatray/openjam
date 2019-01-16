import React from 'react';
import PropTypes from 'prop-types';

const FetchError = ({ message, onRetry }) => (
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

FetchError.propTypes = {
  message: PropTypes.string.isRequired,
  onRetry: PropTypes.func.isRequired,
};

export default FetchError;
