// @flow

import React from 'react';
import Post from 'views/components/Post';

type Props = {
  posts: PostBasic[],
};

const PostList = ({ posts }: Props) => {
  if (!posts) {
    return null;
  }

  return posts.map(item => <Post key={item._id} post={item} />);
};

export default PostList;
