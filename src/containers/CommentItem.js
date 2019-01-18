// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Comment, Icon } from 'semantic-ui-react';

import { deleteComment } from '../reducers/ui/views/share';
import { getUser } from '../reducers/auth';

type Props = {
  deleteComment: (postId: string, commentId: string) => void,
  postId: string,
  comment: {
    firstname: string,
    lastname: string,
    avatar: string,
  },
  user: {},
};

class CommentItem extends PureComponent<Props> {
  handleDeleteClick = (postId, commentId) => {
    this.props.deleteComment(postId, commentId);
  };

  render() {
    const { comment, postId, user } = this.props;

    return (
      <Comment>
        <Comment.Avatar src={comment.avatar} />
        <Comment.Content>
          <Comment.Author as="a">{`${comment.firstname} ${comment.lastname}`}</Comment.Author>
          <Comment.Metadata>
            <div>Today at 5:42PM</div>
          </Comment.Metadata>
          <Comment.Text>{comment.text}</Comment.Text>
          {comment.user === user._id ? (
            <Comment.Actions>
              <Comment.Action onClick={this.handleDeleteClick.bind(undefined, postId, comment._id)}>
                <Icon name="times" />
              </Comment.Action>
            </Comment.Actions>
          ) : null}
        </Comment.Content>
      </Comment>
    );
  }
}

const mapStateToProps = state => ({
  user: getUser(state),
});

export default connect(
  mapStateToProps,
  { deleteComment },
)(CommentItem);
