import React from 'react';
import { ThemeConsumer } from 'styled-components';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Message, Button } from 'semantic-ui-react';

const JoinUs = ({ t }) => (
  <ThemeConsumer>
    {theme => (
      <Message info>
        <Message.Header>{t('components.message.join-us.header')}</Message.Header>
        <p>{t('components.message.join-us.subheader')}</p>
        <Button as={Link} to="/login" color={theme.primarySemantic}>
          {t('components.message.join-us.sign-in')}
        </Button>
        &nbsp;
        <Button as={Link} to="/register">
          {t('components.message.join-us.register')}
        </Button>
      </Message>
    )}
  </ThemeConsumer>
);

export default withNamespaces('common')(JoinUs);
