import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'semantic-ui-react';

const InputGroup = ({ name, placeholder, value, error, icon, type, onChange }) => {
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

InputGroup.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

InputGroup.defaultProps = {
  placeholder: null,
  icon: null,
  error: null,
};

InputGroup.defaultProps = {
  type: 'text',
};

export default InputGroup;
