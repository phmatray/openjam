// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost, addLike, removeLike } from 'store/modules/ui/views/share';
import { getUser, getIsAuthenticated } from 'store/modules/auth';
import type { PostBasic, UserBasic } from 'lib/types';
import Presenter from './PostText.presenter';

type Props = {
  addLike: (postId: string) => void,
  removeLike: (postId: string) => void,
  user: UserBasic,
  post: PostBasic,
  isAuthenticated: boolean,
};

class Post extends Component<Props> {
  render() {
    const { addLike, removeLike, post, user, isAuthenticated } = this.props;

    return (
      <Presenter
        addLike={addLike}
        removeLike={removeLike}
        post={post}
        userId={user._id}
        isAuthenticated={isAuthenticated}
      />
    );
  }
}

const mapStateToProps = state => ({
  user: getUser(state),
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(
  mapStateToProps,
  { deletePost, addLike, removeLike },
)(Post);
