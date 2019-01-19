// @flow

import React from 'react';
import InputGroup from './input/InputGroup';
import SelectListGroup from './input/SelectListGroup';
import TextAreaFieldGroup from './input/TextAreaFieldGroup';
import TextFieldGroup from './input/TextFieldGroup';

type InputAs = 'input' | 'select-list' | 'text-area-field' | 'text-field';

type Props = {
  name: string,
  value: string,
  onChange: () => void,
  as?: InputAs,
};

const Input = ({ as, ...rest }: Props) => {
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

Input.defaultProps = {
  as: 'input',
};

export default Input;
