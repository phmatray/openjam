import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Segment, Button, Feed } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import { getPost } from '../../redux/modules/post';
import PostItem from '../share/PostItem';
import CommentForm from './CommentForm';
import CommentFeed from './CommentFeed';

class Post extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }

  render() {
    const { post, loading } = this.props.post;

    let postContent;

    if (post === null || loading || Object.keys(post).length === 0) {
      postContent = <Spinner />;
    } else {
      postContent = (
        <div>
          <Button as={Link} to="/share" style={{ marginBottom: '2em' }}>
            Back to Feed
          </Button>

          <Feed>
            <PostItem post={post} showActions={false} />
            <CommentForm postId={post._id} />
            <CommentFeed postId={post._id} comments={post.comments} />
          </Feed>
        </div>
      );
    }

    return <Segment basic>{postContent}</Segment>;
  }
}

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  post: state.post,
});

export default connect(
  mapStateToProps,
  { getPost },
)(Post);
