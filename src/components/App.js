// @flow

import React from 'react';
import { withNamespaces } from 'react-i18next';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Layout from '../containers/Layout';
import ThemeWrapper from '../containers/ThemeWrapper';
import DataStore from '../containers/DataStore';
import { GlobalStyle } from '../theme/GlobalStyle';

import Routes from './Routes';

// Add fontAwesome Brand Icons
library.add(fab, faGlobe);

const App = () => (
  <ThemeWrapper>
    <Layout style={{ height: '100vh' }}>
      <Routes />
      <GlobalStyle />
      <DataStore />
    </Layout>
  </ThemeWrapper>
);

export default withNamespaces('common')(App);
