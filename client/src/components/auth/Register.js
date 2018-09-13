import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../redux/modules/auth';

import { withRouter, Link } from 'react-router-dom';
import { Header, Form, Message, Grid, Segment } from 'semantic-ui-react';
import TextFieldGroup from '../common/TextFieldGroup';

class Register extends Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    password2: '',
    errors: {},
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/share');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    const { firstname, lastname, email, password, password2 } = this.state;

    const newUser = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      password2: password2,
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { firstname, lastname, email, password, password2, errors } = this.state;

    return (
      <Segment basic>
        <Grid style={{ height: '100%' }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h1">
              Register
              <Header.Subheader>Create your OpenJam account</Header.Subheader>
            </Header>

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
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { registerUser },
)(withRouter(Register));
