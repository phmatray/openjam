// @flow

import * as React from 'react';

const branch = (
  test: boolean,
  ComponentOnPass: React.Node,
  ComponentOnFail: ?React.Node,
) => props => {
  if (test) {
    return <ComponentOnPass {...props} />;
  }

  return ComponentOnFail ? <ComponentOnFail {...props} /> : null;
};

export default branch;
