import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../../../elements/Inputs/TextAreaFieldGroup';
import { addPost } from '../../../redux/modules/post';
import { Form } from 'semantic-ui-react';

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
      firstname: user.firstname,
      lastname: user.lastname,
      avatar: user.avatar,
    };

    this.props.addPost(newPost);
    this.setState({ text: '' });
  };

  render() {
    const { user } = this.props.auth;
    const { errors } = this.state;

    return (
      <div>
        <Form error noValidate onSubmit={this.handleSubmit}>
          <TextAreaFieldGroup
            placeholder={`Speak your mind, ${user.firstName}`}
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            error={errors.text}
          />
          <Form.Button
            fluid
            size="large"
            color="teal"
            content="Share"
            onClick={this.handleSubmit}
          />
        </Form>
      </div>
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
