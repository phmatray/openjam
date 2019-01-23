// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Icon, Header, Button, Divider, Message } from 'semantic-ui-react';

import BackgroundScreen from 'views/components/BackgroundScreen';

type Props = {
  theme: any,
  t: any,
  errors: { message: string },
  token: string,
};

const getMessage = (token, errors, t) => {
  if (errors && errors.message) {
    return <Message error header="Error" content={errors.message} />;
  }

  return token ? (
    <Message info style={{ overflowWrap: 'break-word' }}>
      <Message.Header>token</Message.Header>
      {token}
    </Message>
  ) : (
    <Message error>
      <Message.Header>{t('pages.activate-account.no-token.title')}</Message.Header>
      <p>{t('pages.activate-account.no-token.message')}</p>
    </Message>
  );
};

const ActivateAccount = ({ theme, t, errors, token }: Props) => (
  <BackgroundScreen>
    <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 500 }}>
        <Header as="h1" icon inverted>
          <Icon name={(errors && errors.message) || !token ? 'lock' : 'unlock'} />
          {t('pages.activate-account.header')}
          <Header.Subheader>{t('pages.activate-account.subheader')}</Header.Subheader>
        </Header>
        <Divider />
        {getMessage(token, errors, t)}

        <Button as={Link} to="login" color={theme.primarySemantic} fluid>
          {t('pages.activate-account.sign-in')}
        </Button>
      </Grid.Column>
    </Grid>
  </BackgroundScreen>
);

export default ActivateAccount;
