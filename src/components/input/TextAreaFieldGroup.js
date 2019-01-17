// @flow

import React from 'react';
import { TextArea } from 'semantic-ui-react';

type Props = {
  name: string,
  value: string,
  onChange: () => void,
  placeholder?: string,
  error?: string,
  info?: string,
};

const TextAreaFieldGroup = ({ name, value, onChange, placeholder, error, info }: Props) => {
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

TextAreaFieldGroup.defaultProps = {
  placeholder: null,
  error: null,
  info: null,
};

export default TextAreaFieldGroup;
