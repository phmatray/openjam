// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Segment, Button, Feed } from 'semantic-ui-react';

import Spinner from '../components/Spinner';
import PostItem from '../components/PostItem';
import CommentForm from '../containers/CommentForm';
import { fetchPost, getLoading, getPost } from '../reducers/ui/views/share';
import type { PostBasic } from '../types';

import CommentFeed from './post/CommentFeed';

type Props = {
  fetchPost: (postId: string) => void,
  match: { params: { id: string } },
  loading: boolean,
  post: PostBasic,
};

class Post extends PureComponent<Props> {
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

const mapStateToProps = state => ({
  post: getPost(state),
  loading: getLoading(state),
});

export default connect(
  mapStateToProps,
  { fetchPost },
)(Post);
