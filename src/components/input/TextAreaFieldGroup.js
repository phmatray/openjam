import React from 'react';
import PropTypes from 'prop-types';
import { TextArea } from 'semantic-ui-react';

const TextAreaFieldGroup = ({ name, placeholder, value, error, info, onChange }) => {
  const messageStyle = {
    fontSize: '0.8em',
    margin: '-0.6rem 0 1rem 0',
  };

  const infoMessageStyle = {
    ...messageStyle,
    color: 'gray',
  };
  const errorMessageStyle = {
    ...messageStyle,
    color: '#9f3a38',
  };

  return (
    <React.Fragment>
      <TextArea
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        error={error}
        style={{ marginBottom: '1em', minHeight: '45px', height: '45px' }}
      />
      {info && (
        <p style={infoMessageStyle}>
          {info}
          <br />
        </p>
      )}
      {error && (
        <p style={errorMessageStyle}>
          {error}
          <br />
        </p>
      )}
    </React.Fragment>
  );
};

TextAreaFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  info: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default TextAreaFieldGroup;
