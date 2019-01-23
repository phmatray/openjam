// @flow

import styled from 'styled-components';
import { Button as ButtonSemantic } from 'semantic-ui-react';

import TextArea from './TextArea';

const Button = styled(ButtonSemantic)`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  opacity: 0.5;
  transition: opacity 0.3s ease;

  &:hover,
  &:focus,
  ${TextArea}:hover + &,
  ${TextArea}:focus + & {
    opacity: 1;
  }
`;

export default Button;
