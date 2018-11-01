import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';

import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import * as serviceWorker from './serviceWorker';
import commonEN from './translations/en/common.json';
import commonFR from './translations/fr/common.json';

import App from './App';

// Init i18next
i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: 'fr', // language to use
  resources: {
    en: {
      common: commonEN, // 'common' is our custom namespace
    },
    fr: {
      common: commonFR,
    },
  },
});

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
