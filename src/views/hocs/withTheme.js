// @flow

import * as React from 'react';
import { ThemeConsumer } from 'styled-components';

import type { Theme } from 'lib/types';

function withTheme<Config: { theme: Theme }>(
  Component: React.AbstractComponent<Config>,
): React.AbstractComponent<$Diff<Config, { theme: Theme }>> {
  return (props: $Diff<Config, { theme: Theme }>) => (
    <ThemeConsumer>{(theme: Theme) => <Component {...props} theme={theme} />}</ThemeConsumer>
  );
}

export default withTheme;
