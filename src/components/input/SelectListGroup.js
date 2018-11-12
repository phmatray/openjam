import React from 'react';
import PropTypes from 'prop-types';
import { Form, Dropdown } from 'semantic-ui-react';

const SelectListGroup = ({ placeholder, error, info, onChange, options, value }) => {
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
        <Dropdown
          placeholder={placeholder}
          fluid
          search
          selection
          options={options}
          value={value}
          style={{ marginBottom: '1em' }}
          error={error && true}
          onChange={onChange}
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
      </Form.Field>
    </React.Fragment>
  );
};

SelectListGroup.propTypes = {
  placeholder: PropTypes.string,
  error: PropTypes.string,
  info: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

SelectListGroup.defaultProps = {
  placeholder: null,
  error: null,
  info: null,
};

export default SelectListGroup;
