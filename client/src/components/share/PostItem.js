import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Feed, Icon } from 'semantic-ui-react';
import { deletePost, addLike, removeLike } from '../../redux/modules/post';

class PostItem extends Component {
  handleDeleteClick = (id, e) => {
    this.props.deletePost(id);
  };

  handleLikeClick = (id, e) => {
    this.props.addLike(id);
  };

  handleUnlikeClick = (id, e) => {
    this.props.removeLike(id);
  };

  findUserLike = likes => {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user._id).length > 0) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    const { post, auth, showActions } = this.props;

    return (
      <Feed.Event>
        <Feed.Label image={post.avatar} />
        <Feed.Content>
          <Feed.Date>
            <Moment fromNow>{post.date}</Moment>
          </Feed.Date>
          <Feed.Summary>
            {post.firstname} {post.lastname}
            {/* <a>{post.firstname} {post.lastname}</a> */}
            {/* TODO: posted on his page*/}
          </Feed.Summary>
          <Feed.Extra text>{post.text}</Feed.Extra>
          {showActions ? (
            <Feed.Meta>
              <Feed.Like onClick={this.handleLikeClick.bind(undefined, post._id)}>
                <Icon name="like" />
                {post.likes.length} Likes
                {/* TODO: findUserLike and show a plain or an empty icon */}
              </Feed.Like>
              <Feed.Like onClick={this.handleUnlikeClick.bind(undefined, post._id)}>
                <Icon name="thumbs down" />
                Dislikes
              </Feed.Like>
              <Feed.Like as={Link} to={`/post/${post._id}`}>
                <Icon name="comments" />
                Comments
              </Feed.Like>
              {post.user === auth.user.id ? (
                <Feed.Like onClick={this.handleDeleteClick.bind(undefined, post._id)}>
                  <Icon name="times" />
                </Feed.Like>
              ) : null}
            </Feed.Meta>
          ) : null}
        </Feed.Content>
      </Feed.Event>
    );
  }
}

PostItem.propTypes = {
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  showActions: PropTypes.bool,
};

PostItem.defaultProps = {
  showActions: true,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { deletePost, addLike, removeLike },
)(PostItem);
