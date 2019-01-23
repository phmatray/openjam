// @flow

import React from 'react';

const withLocalStorage = WrappedComponent => {
  const loadFromStorage = key => localStorage.getItem(key);
  const saveToStorage = (key, value) => localStorage.setItem(key, value);
  const removeFromStorage = key => localStorage.removeItem(key);

  return props => (
    <WrappedComponent
      loadFromStorage={loadFromStorage}
      saveToStorage={saveToStorage}
      removeFromStorage={removeFromStorage}
      {...props}
    />
  );
};

export default withLocalStorage;
