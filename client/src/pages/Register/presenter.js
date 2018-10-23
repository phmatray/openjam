import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Message, Grid, GridColumn } from 'semantic-ui-react';
import Body from '../../elements/UI/Body';
import TextFieldGroup from '../../elements/Inputs/TextFieldGroup';

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
    const { errors } = this.props;

    return (
      <Body breadcrumbSegments={['Register']} description="Create your OpenJam account.">
        <Grid style={{ height: '100%' }} verticalAlign="middle">
          <GridColumn style={{ maxWidth: 450 }}>
            <Form error noValidate onSubmit={this.handleSubmit}>
              <TextFieldGroup
                name="firstname"
                label="First name"
                placeholder="First name"
                icon="user"
                value={firstname}
                onChange={this.handleChange}
                error={errors.firstname}
              />

              <TextFieldGroup
                name="lastname"
                label="Last name"
                placeholder="Last name"
                icon="user"
                value={lastname}
                onChange={this.handleChange}
                error={errors.lastname}
              />

              <TextFieldGroup
                type="email"
                name="email"
                label="Email Address"
                placeholder="Email Address"
                icon="mail"
                value={email}
                onChange={this.handleChange}
                error={errors.email}
                info="This app uses Gravatar so if you want a profile image, use a Gravatar email"
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

              <TextFieldGroup
                type="password"
                name="password2"
                label="Confirm Password"
                placeholder="Confirm Password"
                icon="lock"
                value={password2}
                onChange={this.handleChange}
                error={errors.password2}
              />

              <Form.Button fluid size="large" color="teal" content="Submit" />
            </Form>
            <Message style={{ textAlign: 'center' }}>
              Already an account?
              <br />
              <Link to="/login">Sign In</Link>
            </Message>
          </GridColumn>
        </Grid>
      </Body>
    );
  }
}

export default RegisterPresenter;
