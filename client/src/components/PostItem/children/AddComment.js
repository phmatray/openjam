import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../../redux/modules/post';
import { AvatarSmall, Button, AddCommentForm } from './styles';
import Flex from '../../../elements/Flex';
import TextAreaFieldGroup from '../../../elements/Inputs/TextAreaFieldGroup';

class AddComment extends Component {
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
      firstname: user.firstname,
      lastname: user.lastname,
      handle: user.handle,
      avatar: user.avatar,
    };

    this.props.addComment(postId, newComment);
    this.setState({ text: '' });
  };

  render() {
    const { errors } = this.state;
    const { user } = this.props;

    return (
      <Flex>
        <AvatarSmall src={user.avatar} />
        <AddCommentForm error noValidate onSubmit={this.handleSubmit}>
          <TextAreaFieldGroup
            placeholder={'Express yourself'}
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            error={errors.text}
          />
          <Button
            circular
            compact
            icon="send"
            color="teal"
            content="Send"
            onClick={this.handleSubmit}
          />
        </AddCommentForm>
      </Flex>
    );
  }
}

AddComment.propTypes = {
  postId: PropTypes.string.isRequired,
  user: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  user: state.auth.user,
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { addComment },
)(AddComment);
