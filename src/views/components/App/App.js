// @flow

import React from 'react';
import { withNamespaces } from 'react-i18next';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Routes from 'views/components/Routes';
import Layout from 'views/components/Layout';
import ThemeWrapper from 'views/components/ThemeWrapper';
import DataStore from 'views/components/DataStore';
import { GlobalStyle } from 'lib/theme/GlobalStyle';

const App = () => {
  // Add fontAwesome Brand Icons
  library.add(fab, faGlobe);

  return (
    <ThemeWrapper>
      <Layout style={{ height: '100vh' }}>
        <Routes />
        <GlobalStyle />
        <DataStore />
      </Layout>
    </ThemeWrapper>
  );
};

export default withNamespaces('common')(App);
