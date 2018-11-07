import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';

import * as serviceWorker from './serviceWorker';
import I18nWrapper from './components/I18nWrapper';
import App from './components/App';

ReactDOM.render(
  <I18nWrapper>
    <App />
  </I18nWrapper>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
