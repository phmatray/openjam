// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import 'semantic-ui-css/semantic.min.css';

import store from 'store';
import I18nWrapper from 'views/components/I18nWrapper';
import Root from 'views/components/Root';
import * as serviceWorker from 'serviceWorker';

const root = document.getElementById('root');

if (root === null) {
  throw new Error('root is null');
}

ReactDOM.render(
  <I18nWrapper>
    <Root store={store} />
  </I18nWrapper>,
  root,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
