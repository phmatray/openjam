// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddComment from '../components/AddComment';
import withTheme from '../hocs/withTheme';
import { addComment } from '../reducers/ui/views/share';
import { getUser } from '../reducers/auth';
import { getErrors } from '../reducers/data/error';
import type { UserBasic } from '../types';

type Props = {
  addComment: (postId: string, newComment: any) => void,
  postId: string,
  user: UserBasic,
  errors: any,
  theme: any,
};

type State = { text: string, errors: {} };

class AddCommentContainer extends Component<Props, State> {
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

  generateProps = () => ({
    ...this.props,
    ...this.state,
    onChange: this.handleChange,
    onSubmit: this.handleSubmit,
  });

  render() {
    const props = this.generateProps();
    return <AddComment {...props} />;
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
  )(AddCommentContainer),
);
