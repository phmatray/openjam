import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Segment, SegmentGroup } from 'semantic-ui-react';
import LikeButton from './LikeButton';
import AddComment from './AddComment';
import { SegmentPostBasic } from '../SegmentPost';
import Intro from './Intro';
import { Content } from './styles';
import Comment from './Comment';
import { deletePost, addLike, removeLike } from '../../redux/modules/page-share';
import { getUser, getIsAuthenticated } from '../../redux/modules/auth';

class PostBasic extends Component {
  findUserLike = likes => {
    const { user } = this.props;
    return likes && likes.filter(like => like.user === user._id).length > 0;
  };

  renderComments = comments =>
    comments !== undefined &&
    comments !== null &&
    comments.length > 0 &&
    comments.map(comment => <Comment key={comment._id} comment={comment} />);

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

          {comments && (comments.length > 0 || isAuthenticated) && (
            <SegmentGroup>
              {comments.length > 0 && <Segment>{this.renderComments(comments)}</Segment>}
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
    likes: PropTypes.array,
    shares: PropTypes.array,
    comments: PropTypes.array,
  }),
  isAuthenticated: PropTypes.bool.isRequired,
};

PostBasic.defaultProps = {
  post: {
    likes: [],
    shares: [],
    comments: [],
  },
};

const mapStateToProps = state => ({
  user: getUser(state),
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(
  mapStateToProps,
  { deletePost, addLike, removeLike },
)(PostBasic);
