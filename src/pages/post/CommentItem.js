import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Comment, Icon } from 'semantic-ui-react';
import { deleteComment } from '../../redux/modules/page-share';

class CommentItem extends Component {
  handleDeleteClick = (postId, commentId) => {
    this.props.deleteComment(postId, commentId);
  };

  render() {
    const { comment, postId, auth } = this.props;

    return (
      <Comment>
        <Comment.Avatar src={comment.avatar} />
        <Comment.Content>
          <Comment.Author as="a">{`${comment.firstname} ${comment.lastname}`}</Comment.Author>
          <Comment.Metadata>
            <div>Today at 5:42PM</div>
          </Comment.Metadata>
          <Comment.Text>{comment.text}</Comment.Text>
          {comment.user === auth.user.id ? (
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

CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { deleteComment },
)(CommentItem);
