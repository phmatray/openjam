import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  Form,
  Message,
  Grid,
  GridColumn,
  GridRow,
  Button,
  Icon,
  Divider,
  Header,
} from 'semantic-ui-react';

import Body from '../../components/Body';
import Input from '../../components/Input';

class LoginPresenter extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    const { email, password } = this.state;
    const { loginUser } = this.props;

    const userData = {
      email,
      password,
    };

    loginUser(userData);
  };

  render() {
    const { email, password } = this.state;
    const { errors, t } = this.props;

    return (
      <Body breadcrumbSegments={[t('pages.login.header')]} description={t('pages.login.subheader')}>
        <Grid verticalAlign="middle" divided="vertically" style={{ maxWidth: '450px' }}>
          <GridRow>
            <GridColumn textAlign="left" mobile={16} tablet={16} computer={16}>
              <Header as="h3">{t('pages.login.header-social')}</Header>
              <Button.Group basic vertical fluid>
                <Button as="a" size="large" href="https://api.openjam.eu/auth/facebook">
                  <Icon name="facebook" />
                  {` ${t('pages.login.action-facebook')}`}
                </Button>
                <Button as="a" size="large" href="https://api.openjam.eu/auth/github">
                  <Icon name="github" />
                  {` ${t('pages.login.action-github')}`}
                </Button>
              </Button.Group>
              <Divider horizontal>{t('pages.login.or')}</Divider>
              <Header as="h3">{t('pages.login.header-email')}</Header>
              <Form error noValidate onSubmit={this.handleSubmit}>
                <Input
                  as="text-field"
                  type="email"
                  name="email"
                  label={t('pages.login.input-email')}
                  placeholder={t('pages.login.input-email')}
                  icon="mail"
                  value={email}
                  onChange={this.handleChange}
                  error={errors.email}
                />

                <Input
                  as="text-field"
                  type="password"
                  name="password"
                  label={t('pages.login.input-password')}
                  placeholder={t('pages.login.input-password')}
                  icon="lock"
                  value={password}
                  onChange={this.handleChange}
                  error={errors.password}
                />

                <Form.Button
                  fluid
                  size="large"
                  color="teal"
                  content={t('pages.login.action-submit')}
                />
              </Form>
              <Message style={{ textAlign: 'center' }}>
                {t('pages.login.no-account')}
                <br />
                <Link to="/register">{t('pages.login.sign-up-now')}</Link>
              </Message>
            </GridColumn>
          </GridRow>
        </Grid>
      </Body>
    );
  }
}

export default withNamespaces('common')(LoginPresenter);
