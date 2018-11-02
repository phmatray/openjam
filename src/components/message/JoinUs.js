import React from 'react';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Message, Button } from 'semantic-ui-react';

const JoinUs = ({ t }) => (
  <Message info>
    <Message.Header>{t('components.message.join-us.header')}</Message.Header>
    <p>{t('components.message.join-us.subheader')}</p>
    <Button as={Link} to="/register" color="teal">
      {t('components.message.join-us.register')}
    </Button>
    &nbsp;
    <Button as={Link} to="/login" color="teal">
      {t('components.message.join-us.sign-in')}
    </Button>
  </Message>
);

export default withNamespaces('common')(JoinUs);
