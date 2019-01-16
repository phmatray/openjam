import React, { PureComponent } from 'react';
import { ThemeConsumer } from 'styled-components';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Form, Message, Grid, Icon, Header, Segment } from 'semantic-ui-react';

import BackgroundScreen from '../../components/BackgroundScreen';
import Input from '../../components/Input';

class LoginPresenter extends PureComponent {
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
    const { errors, t, loading } = this.props;

    return (
      <ThemeConsumer>
        {theme => (
          <BackgroundScreen>
            <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
              <Grid.Column style={{ maxWidth: 500 }}>
                <Header as="h1" icon inverted>
                  <Icon name="sign in" />
                  {t('pages.login.header')}
                  <Header.Subheader>{t('pages.login.subheader')}</Header.Subheader>
                </Header>

                {/*
                <Segment stacked>
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
                </Segment>

                <Divider horizontal inverted>
                  {t('pages.login.or')}
                </Divider>
                */}

                <Segment stacked>
                  <Header as="h3">{t('pages.login.header-email')}</Header>
                  <Form error noValidate onSubmit={this.handleSubmit} loading={loading}>
                    <Input
                      as="text-field"
                      type="email"
                      name="email"
                      placeholder={t('pages.login.input-email')}
                      icon="mail"
                      value={email}
                      onChange={this.handleChange}
                    />

                    <Input
                      as="text-field"
                      type="password"
                      name="password"
                      placeholder={t('pages.login.input-password')}
                      icon="lock"
                      value={password}
                      onChange={this.handleChange}
                    />

                    <Message error header={errors.error} content={errors.message} />

                    <Form.Button
                      fluid
                      size="big"
                      color={theme.primarySemantic}
                      content={t('pages.login.action-submit')}
                    />
                  </Form>
                </Segment>

                <Message style={{ textAlign: 'center' }}>
                  {t('pages.login.no-account')}
                  <br />
                  <Link to="/register">{t('pages.login.sign-up-now')}</Link>
                </Message>
              </Grid.Column>
            </Grid>
          </BackgroundScreen>
        )}
      </ThemeConsumer>
    );
  }
}

export default withNamespaces('common')(LoginPresenter);
