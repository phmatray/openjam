import React, { Component } from 'react';
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
import Body from '../../elements/UI/Body';
import TextFieldGroup from '../../elements/Inputs/TextFieldGroup';

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
      email: email,
      password: password,
    };

    loginUser(userData);
  };

  render() {
    const { email, password } = this.state;
    const { errors } = this.props;

    return (
      <Body breadcrumbSegments={['Log In']} description="Sign in to your OpenJam account.">
        <Grid verticalAlign="middle" divided="vertically" style={{ maxWidth: '450px' }}>
          <GridRow>
            <GridColumn textAlign="left" mobile={16} tablet={16} computer={16}>
              <Header as="h3">Login with social provider</Header>
              <Button.Group basic vertical fluid>
                <Button as="a" size="large" href="https://api.openjam.eu/auth/facebook">
                  <Icon name="facebook" /> Sign in with Facebook
                </Button>
                <Button as="a" size="large" href="https://api.openjam.eu/auth/github">
                  <Icon name="github" /> Sign in with GitHub
                </Button>
              </Button.Group>
              <Divider horizontal>OR</Divider>
              <Header as="h3">Login with email</Header>
              <Form error noValidate onSubmit={this.handleSubmit}>
                <TextFieldGroup
                  type="email"
                  name="email"
                  label="Email Address"
                  placeholder="Email Address"
                  icon="mail"
                  value={email}
                  onChange={this.handleChange}
                  error={errors.email}
                />

                <TextFieldGroup
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="Password"
                  icon="lock"
                  value={password}
                  onChange={this.handleChange}
                  error={errors.password}
                />

                <Form.Button fluid size="large" color="teal" content="Submit" />
              </Form>
              <Message style={{ textAlign: 'center' }}>
                Don't have an account?
                <br />
                <Link to="/register">Sign-up now</Link>
              </Message>
            </GridColumn>
          </GridRow>
        </Grid>
      </Body>
    );
  }
}

export default LoginPresenter;
