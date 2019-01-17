// @flow

import React from 'react';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import withTheme from '../../../hocs/withTheme';

const ButtonLogin = ({ theme, t }) => (
  <Button
    as={Link}
    to="/login"
    color={theme.primarySemantic}
    size="massive"
    fluid
    style={{ fontFamily: 'Ubuntu' }}
    content={t('pages.landing.sign-in')}
  />
);

export default withTheme(withNamespaces('common')(ButtonLogin));
