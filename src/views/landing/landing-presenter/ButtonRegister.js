// @flow

import React from 'react';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const ButtonRegister = ({ t }) => (
  <Button
    as={Link}
    to="/register"
    size="massive"
    fluid
    style={{ fontFamily: 'Ubuntu' }}
    content={t('pages.landing.register')}
  />
);

export default withNamespaces('common')(ButtonRegister);
