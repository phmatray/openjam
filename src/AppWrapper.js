import React from 'react';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

import commonEN from './translations/en/common.json';
import commonFR from './translations/fr/common.json';

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

const AppWrapper = ({ children }) => <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;

export default AppWrapper;
