import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Segment, Button, Feed } from 'semantic-ui-react';

import Spinner from '../components/Spinner';
import PostItem from '../components/PostItem';
import { fetchPost, getLoading, getPost } from '../reducers/ui/pages/share';

import CommentForm from './post/CommentForm';
import CommentFeed from './post/CommentFeed';

class Post extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  render() {
    const { post, loading } = this.props;

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
  fetchPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  post: getPost(state),
  loading: getLoading(state),
});

export default connect(
  mapStateToProps,
  { fetchPost },
)(Post);
