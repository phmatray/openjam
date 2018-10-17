import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LikeButton } from '../../ActionButtons';
import { Segment, SegmentGroup } from 'semantic-ui-react';
import AddComment from './AddComment';
import { SegmentPostBasic } from '../../../elements/UI/SegmentPost';
import Intro from '../elements/Intro';
import { Content } from './styles';
import Comment from './Comment';
import { deletePost, addLike, removeLike } from '../../../redux/modules/post';

class PostBasic extends Component {
  findUserLike = likes => {
    const { user } = this.props;
    if (likes.filter(like => like.user === user._id).length > 0) {
      return true;
    } else {
      return false;
    }
  };

  renderComments = comments =>
    comments !== undefined &&
    comments !== null &&
    comments.length > 0 &&
    comments.map((comment, idx) => <Comment key={idx} comment={comment} />);

  render() {
    const { post, addLike, removeLike, isAuthenticated } = this.props;
    const { text, comments, avatar, likes } = post;
    const likesCount = likes ? likes.length : 0;
    // const sharesCount = shares ? shares.length : 0;

    return (
      <SegmentPostBasic>
        <Intro post={post} />

        <Content>
          <p>{text}</p>

          {comments.length > 0 && (
            <SegmentGroup>
              <Segment>{this.renderComments(comments)}</Segment>
              {isAuthenticated && (
                <Segment>
                  <AddComment avatar={avatar} postId={post._id} />
                </Segment>
              )}
            </SegmentGroup>
          )}

          {isAuthenticated && (
            <LikeButton
              likes={likesCount}
              likeAction={() => addLike(post._id)}
              unlikeAction={() => removeLike(post._id)}
              active={this.findUserLike(post.likes)}
            />
          )}
          {/* TODO: implement the share button */}
          {/* <ShareButton shares={sharesCount} /> */}
        </Content>
      </SegmentPostBasic>
    );
  }
}

PostBasic.propTypes = {
  user: PropTypes.object.isRequired,
  post: PropTypes.shape({
    text: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    likes: PropTypes.array,
    shares: PropTypes.array,
    comments: PropTypes.array,
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

PostBasic.defaultProps = {
  comments: [],
  showActions: true,
};

const mapStateToProps = state => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(
  mapStateToProps,
  { deletePost, addLike, removeLike },
)(PostBasic);
