// @flow

import React from 'react';
import { Form, Input } from 'semantic-ui-react';

type Props = {
  type?: string,
  name: string,
  placeholder?: string,
  value: string,
  label?: string,
  icon?: string,
  error?: string,
  info?: string,
  onChange: () => void,
  disabled?: boolean,
  required?: boolean,
};

const TextFieldGroup = ({
  type,
  name,
  placeholder,
  value,
  label,
  icon,
  error,
  info,
  onChange,
  disabled,
  required,
}: Props) => {
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
      <Form.Field>
        <label>{label}</label>
        <Input
          type={type}
          label={required && { icon: 'asterisk' }}
          labelPosition={required && 'right corner'}
          icon={icon}
          iconPosition={icon && 'left'}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          disabled={!!disabled}
          error={error && true}
        />
      </Form.Field>

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

TextFieldGroup.defaultProps = {
  placeholder: null,
  label: null,
  icon: null,
  error: null,
  info: null,
  disabled: false,
  required: false,
  type: 'text',
};

export default TextFieldGroup;
