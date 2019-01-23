// @flow

import * as React from 'react';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

import commonEN from 'lib/translations/en/common.json';
import commonFR from 'lib/translations/fr/common.json';

type Props = {
  children: React.Node,
};

// Init i18next
i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: process.env.REACT_APP_LANGUAGE || 'en', // language to use
  resources: {
    en: {
      common: commonEN, // 'common' is our custom namespace
    },
    fr: {
      common: commonFR,
    },
  },
});

const I18nWrapper = ({ children }: Props) => (
  <I18nextProvider i18n={i18next}>{children}</I18nextProvider>
);

export default I18nWrapper;
