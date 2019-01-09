import React from 'react';
import { withNamespaces } from 'react-i18next';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Layout from './Layout';
import Routes from './Routes';
import ThemeWrapper from './app/ThemeWrapper';

import { GlobalStyle } from '../theme/GlobalStyle';

// Add fontAwesome Brand Icons
library.add(fab, faGlobe);

const App = () => (
  <ThemeWrapper>
    <Layout style={{ height: '100vh' }}>
      <Routes />
      <GlobalStyle />
    </Layout>
  </ThemeWrapper>
);

export default withNamespaces('common')(App);
