import React, { Component } from 'react';
import { ThemeConsumer } from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';

import TextAreaFieldGroup from '../../components/input/TextAreaFieldGroup';
import { addComment } from '../../redux/modules/page-share';
import { getErrors } from '../../redux/modules/error';
import { getUser } from '../../redux/modules/auth';

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

    const { user, postId } = this.props;

    const newComment = {
      text: this.state.text,
      firstName: user.firstName,
      lastName: user.lastName,
      avatar: user.avatar,
    };

    this.props.addComment(postId, newComment);
    this.setState({ text: '' });
  };

  render() {
    const { errors } = this.state;

    return (
      <ThemeConsumer>
        {theme => (
          <div>
            <p>Make a comment...</p>
            <Form error noValidate onSubmit={this.handleSubmit}>
              <TextAreaFieldGroup
                placeholder="Reply to post"
                name="text"
                value={this.state.text}
                onChange={this.handleChange}
                error={errors.text}
              />
              <Form.Button
                fluid
                size="large"
                color={theme.primarySemantic}
                content="Submit"
                onClick={this.handleSubmit}
              />
            </Form>
          </div>
        )}
      </ThemeConsumer>
    );
  }
}

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: getUser(state),
  errors: getErrors(state),
});

export default connect(
  mapStateToProps,
  { addComment },
)(CommentForm);
