import React from 'react';
import PropTypes from 'prop-types';
import InputGroup from './input/InputGroup';
import SelectListGroup from './input/SelectListGroup';
import TextAreaFieldGroup from './input/TextAreaFieldGroup';
import TextFieldGroup from './input/TextFieldGroup';

const Input = ({ as, ...rest }) => {
  switch (as) {
    case 'input':
      return <InputGroup {...rest} />;
    case 'select-list':
      return <SelectListGroup {...rest} />;
    case 'text-area-field':
      return <TextAreaFieldGroup {...rest} />;
    case 'text-field':
      return <TextFieldGroup {...rest} />;

    default:
      return null;
  }
};

Input.propTypes = {
  as: PropTypes.oneOf(['input', 'select-list', 'text-area-field', 'text-field']).isRequired,
};

Input.defaultProps = {
  as: 'input',
};

export default Input;
