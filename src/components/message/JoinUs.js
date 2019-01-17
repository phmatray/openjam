import React from 'react';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Message, Button } from 'semantic-ui-react';

import withTheme from '../../hocs/withTheme';

const JoinUs = ({ theme, t }) => (
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
);

export default withTheme(withNamespaces('common')(JoinUs));
