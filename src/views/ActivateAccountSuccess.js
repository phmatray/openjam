import React from 'react';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Grid, Icon, Header, Button, Divider } from 'semantic-ui-react';

import BackgroundScreen from '../components/BackgroundScreen';
import withTheme from '../hocs/withTheme';

const RegisterThanks = ({ theme, t }) => (
  <BackgroundScreen>
    <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 500 }}>
        <Header as="h1" icon inverted>
          <Icon name="lock open" />
          {t('pages.activate-account-success.header')}
          <Header.Subheader>{t('pages.activate-account-success.subheader')}</Header.Subheader>
        </Header>
        <Divider />
        <Button as={Link} to="login" color={theme.primarySemantic} size="big" fluid>
          {t('pages.activate-account-success.sign-in')}
        </Button>
      </Grid.Column>
    </Grid>
  </BackgroundScreen>
);

export default withTheme(withNamespaces('common')(RegisterThanks));
