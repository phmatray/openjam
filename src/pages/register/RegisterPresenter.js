import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Form, Message, Grid, GridColumn } from 'semantic-ui-react';

import Body from '../../components/Body';
import Input from '../../components/Input';

class RegisterPresenter extends Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    password2: '',
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    const { firstname, lastname, email, password, password2 } = this.state;
    const { registerUser } = this.props;

    const newUser = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      password2: password2,
    };

    registerUser(newUser, this.props.history);
  };

  render() {
    const { firstname, lastname, email, password, password2 } = this.state;
    const { errors, t } = this.props;

    return (
      <Body breadcrumbSegments={[t('pages.register.header')]} description={t('pages.register.subheader')}>
        <Grid style={{ height: '100%' }} verticalAlign="middle">
          <GridColumn style={{ maxWidth: 450 }}>
            <Form error noValidate onSubmit={this.handleSubmit}>
              <Input
              as='text-field'
                name="firstname"
                label={t('pages.register.input-firstname')}
                placeholder={t('pages.register.input-firstname')}
                icon="user"
                value={firstname}
                onChange={this.handleChange}
                error={errors.firstname}
              />

              <Input
              as='text-field'
                name="lastname"
                label={t('pages.register.input-lastname')}
                placeholder={t('pages.register.input-lastname')}
                icon="user"
                value={lastname}
                onChange={this.handleChange}
                error={errors.lastname}
              />

              <Input
              as='text-field'
                type="email"
                name="email"
                label={t('pages.register.input-email')}
                placeholder={t('pages.register.input-email')}
                icon="mail"
                value={email}
                onChange={this.handleChange}
                error={errors.email}
                info={t('pages.register.gravatar')}
              />

              <Input
              as='text-field'
                type="password"
                name="password"
                label={t('pages.register.input-password')}
                placeholder={t('pages.register.input-password')}
                icon="lock"
                value={password}
                onChange={this.handleChange}
                error={errors.password}
              />

              <Input
              as='text-field'
                type="password"
                name="password2"
                label={t('pages.register.input-password2')}
                placeholder={t('pages.register.input-password2')}
                icon="lock"
                value={password2}
                onChange={this.handleChange}
                error={errors.password2}
              />

              <Form.Button fluid size="large" color="teal" content={t('pages.register.action-submit')} />
            </Form>
            <Message style={{ textAlign: 'center' }}>
              {t('pages.register.already')}
              <br />
              <Link to="/login">{t('pages.register.sign-in')}</Link>
            </Message>
          </GridColumn>
        </Grid>
      </Body>
    );
  }
}

export default withNamespaces('common')(RegisterPresenter);
