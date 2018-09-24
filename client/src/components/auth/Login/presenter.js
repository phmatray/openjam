import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Segment, Header, Form, Message, Grid } from 'semantic-ui-react';
import TextFieldGroup from '../../common/TextFieldGroup';

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
      <Segment basic>
        <Header as="h1">
          Log In
          <Header.Subheader>Sign in to your OpenJam account</Header.Subheader>
        </Header>

        <Grid style={{ height: '100%' }} verticalAlign="middle">
          <Grid.Column textAlign="left" style={{ maxWidth: 450 }}>
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
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default LoginPresenter;
