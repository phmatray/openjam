import React, { Component } from 'react';
import { ThemeConsumer } from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';

import { addPost } from '../../redux/modules/page-share';
import Div from '../../components/Div';
import Input from '../../components/Input';

class PostForm extends Component {
  state = {
    text: '',
    errors: {},
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = e => {
    e.preventDefault();

    const { user } = this.props.auth;

    const newPost = {
      text: this.state.text,
      firstName: user.firstName,
      lastName: user.lastName,
      handle: user.handle,
      avatar: user.avatar,
    };

    this.props.addPost(newPost);
    this.setState({ text: '' });
  };

  render() {
    const { user } = this.props.auth;
    const { errors } = this.state;

    return (
      <ThemeConsumer>
        {theme => (
          <Div mb="1em">
            <Form error noValidate onSubmit={this.handleSubmit}>
              <Input
                as="text-area-field"
                placeholder={`Speak your mind, ${user.firstName}`}
                name="text"
                value={this.state.text}
                onChange={this.handleChange}
                error={errors.text}
              />
              <Form.Button
                fluid
                size="large"
                color={theme.primarySemantic}
                content="Share"
                onClick={this.handleSubmit}
              />
            </Form>
          </Div>
        )}
      </ThemeConsumer>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { addPost },
)(PostForm);
