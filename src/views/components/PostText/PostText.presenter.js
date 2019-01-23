// @flow

import React from 'react';
import { Segment, SegmentGroup } from 'semantic-ui-react';

import AddComment from 'views/components/AddComment';
import type { PostBasic } from 'lib/types';

import Comment from './children/Comment';
import Intro from './children/Intro';
import LikeButton from './children/LikeButton';
import Content from './styled/Content';
import SegmentPostBasic from './styled/SegmentPost';

type Props = {
  addLike: (postId: string) => void,
  removeLike: (postId: string) => void,
  post: PostBasic,
  userId: string,
  isAuthenticated: boolean,
};

const findUserLike = (likes, userId: string) =>
  likes && likes.filter(like => like.user === userId).length > 0;

const renderComments = comments =>
  comments !== undefined &&
  comments !== null &&
  comments.length > 0 &&
  comments.map(comment => <Comment key={comment._id} comment={comment} />);

const Post = ({ addLike, removeLike, post, userId, isAuthenticated }: Props) => {
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
            {comments.length > 0 && <Segment>{renderComments(comments)}</Segment>}
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
            active={findUserLike(post.likes, userId)}
          />
        )}
        {/* TODO: implement the share button */}
        {/* <ShareButton shares={sharesCount} /> */}
      </Content>
    </SegmentPostBasic>
  );
};

export default Post;
