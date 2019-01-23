// @flow

import * as React from 'react';

function withSessionStorage<Config: {}>(
  WrappedComponent: React.AbstractComponent<Config>,
): React.AbstractComponent<Config> {
  const loadFromStorage = key => sessionStorage.getItem(key);
  const saveToStorage = (key, value) => sessionStorage.setItem(key, value);
  const removeFromStorage = key => sessionStorage.removeItem(key);

  return props => (
    <WrappedComponent
      loadFromStorage={loadFromStorage}
      saveToStorage={saveToStorage}
      removeFromStorage={removeFromStorage}
      {...props}
    />
  );
}

export default withSessionStorage;
