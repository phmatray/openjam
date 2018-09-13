import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'semantic-ui-react';

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
}) => {
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
          disabled={disabled ? true : false}
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

TextFieldGroup.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  icon: PropTypes.string,
  error: PropTypes.string,
  info: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string,
  required: PropTypes.bool,
};

TextFieldGroup.defaultProps = {
  type: 'text',
};

export default TextFieldGroup;
