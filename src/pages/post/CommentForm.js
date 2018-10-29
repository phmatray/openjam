import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../../components/Inputs/TextAreaFieldGroup';
import { addComment } from '../../redux/modules/post';
import { Form } from 'semantic-ui-react';

class CommentForm extends Component {
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
    const { postId } = this.props;

    const newComment = {
      text: this.state.text,
      firstname: user.firstname,
      lastname: user.lastname,
      avatar: user.avatar,
    };

    this.props.addComment(postId, newComment);
    this.setState({ text: '' });
  };

  render() {
    const { errors } = this.state;

    return (
      <div>
        <p>Make a comment...</p>
        <Form error noValidate onSubmit={this.handleSubmit}>
          <TextAreaFieldGroup
            placeholder={'Reply to post'}
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            error={errors.text}
          />
          <Form.Button
            fluid
            size="large"
            color="teal"
            content="Submit"
            onClick={this.handleSubmit}
          />
        </Form>
      </div>
    );
  }
}

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { addComment },
)(CommentForm);
