// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Flex from '../components/Flex';
import Div from '../components/Div';
import Input from '../components/Input';
import AvatarSmall from '../components/post-item/styled/AvatarSmall';
import Button from '../components/post-item/styled/Button';
import AddCommentForm from '../components/post-item/styled/AddCommentForm';
import withTheme from '../hocs/withTheme';
import { addComment } from '../reducers/ui/views/share';
import { getUser } from '../reducers/auth';
import { getErrors } from '../reducers/data/error';

type Props = {
  postId: string,
  user: {
    firstName: string,
    lastName: string,
    handle: string,
    profileImageUrl: string,
  },
};

type State = { text: string, errors: {} };

class AddComment extends Component<Props, State> {
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
      handle: user.handle,
      profileImageUrl: user.profileImageUrl,
    };

    this.props.addComment(postId, newComment);
    this.setState({ text: '' });
  };

  render() {
    const { errors } = this.state;
    const { user, theme } = this.props;

    return (
      <Flex>
        <AvatarSmall src={user.profileImageUrl} />
        <AddCommentForm error noValidate onSubmit={this.handleSubmit}>
          <Div mb="-1em">
            <Input
              as="text-area-field"
              placeholder={`Express yourself ${user.firstName}...`}
              name="text"
              value={this.state.text}
              onChange={this.handleChange}
              error={errors.text}
            />
            <Button
              circular
              compact
              icon="send"
              color={theme.primarySemantic}
              content="Send"
              onClick={this.handleSubmit}
            />
          </Div>
        </AddCommentForm>
      </Flex>
    );
  }
}

const mapStateToProps = state => ({
  user: getUser(state),
  errors: getErrors(state),
});

export default withTheme(
  connect(
    mapStateToProps,
    { addComment },
  )(AddComment),
);
