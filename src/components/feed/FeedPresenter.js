import React from 'react';
import PropTypes from 'prop-types';
import FeedStyled from './feed-presenter/FeedStyled';
import PostItem from '../PostItem';

const FeedPresenter = ({ posts }) => (
  <FeedStyled>
    {posts.map(item => (
      <PostItem key={item._id} post={item} />
    ))}
  </FeedStyled>
);

FeedPresenter.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default FeedPresenter;
