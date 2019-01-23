// @flow

import React from 'react';
import { Form, Input } from 'semantic-ui-react';

type Props = {
  name: string,
  value: string,
  type?: string,
  placeholder?: string,
  icon?: string,
  error?: string,
  onChange: () => void,
};

const InputGroup = ({ name, value, type, placeholder, icon, error, onChange }: Props) => {
  const messageStyle = {
    fontSize: '0.8em',
    margin: '-0.6rem 0 1rem 0',
  };

  const errorMessageStyle = {
    ...messageStyle,
    color: '#9f3a38',
  };

  return (
    <React.Fragment>
      <Form.Field>
        <Input
          type={type}
          icon={icon}
          iconPosition={icon && 'left'}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          error={error}
        />
      </Form.Field>
      {error && (
        <p style={errorMessageStyle}>
          {error}
          <br />
        </p>
      )}
    </React.Fragment>
  );
};

InputGroup.defaultProps = {
  type: 'text',
  placeholder: null,
  icon: null,
  error: null,
};

export default InputGroup;
