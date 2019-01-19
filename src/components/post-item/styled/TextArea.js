// @flow

import styled from 'styled-components';
import { TextArea as TextAreaSemantic } from 'semantic-ui-react';

const TextArea = styled(TextAreaSemantic).attrs({ autoHeight: true })`
  padding-right: '3.5em';
`;

export default TextArea;
