// @flow

import React from 'react';
import { ThemeConsumer } from 'styled-components';

const withTheme = WrappedComponent => props => (
  <ThemeConsumer>{theme => <WrappedComponent theme={theme} {...props} />}</ThemeConsumer>
);

export default withTheme;
