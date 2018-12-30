import React from 'react';
import { ThemeConsumer } from 'styled-components';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Grid, Icon, Header, Button, Divider } from 'semantic-ui-react';

import BackgroundScreen from '../components/BackgroundScreen';

const RegisterThanks = ({ t }) => (
  <ThemeConsumer>
    {theme => (
      <BackgroundScreen>
        <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 500 }}>
            <Header as="h1" icon inverted>
              <Icon name="music" />
              {t('pages.register-thanks.header')}
              <Header.Subheader>{t('pages.register-thanks.subheader')}</Header.Subheader>
            </Header>
            <Divider />
            <Header as="h5" icon inverted>
              {t('pages.register-thanks.already')}
            </Header>
            <br />
            <Button as={Link} to="login" color={theme.primary}>
              {t('pages.register-thanks.sign-in')}
            </Button>
          </Grid.Column>
        </Grid>
      </BackgroundScreen>
    )}
  </ThemeConsumer>
);

export default withNamespaces('common')(RegisterThanks);
