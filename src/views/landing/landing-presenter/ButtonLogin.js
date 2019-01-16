import React from 'react';
import { ThemeConsumer } from 'styled-components';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const ButtonLogin = ({ t }) => (
  <ThemeConsumer>
    {theme => (
      <Button
        as={Link}
        to="/login"
        color={theme.primarySemantic}
        size="massive"
        fluid
        style={{ fontFamily: 'Ubuntu' }}
        content={t('pages.landing.sign-in')}
      />
    )}
  </ThemeConsumer>
);

export default withNamespaces('common')(ButtonLogin);
