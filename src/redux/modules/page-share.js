import axios from 'axios';

import { updateErrors, clearErrors } from './error';

// Actions
//
const LOAD = 'post/LOAD';
const UPDATE_POSTS = 'post/UPDATE_POSTS';
const CREATE_POST = 'post/CREATE_POST';
const UPDATE_POST = 'post/UPDATE_POST';
const UPDATE_POST_LIKE = 'post/UPDATE_POST_LIKE';
const REMOVE_POST = 'post/REMOVE_POST';

// Reducer
//
const initialState = {
  posts: [],
  post: {},
  loading: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD:
      return { ...state, loading: true };

    case UPDATE_POSTS:
      return { ...state, posts: action.payload.docs, loading: false };

    case UPDATE_POST:
      return { ...state, post: action.payload, loading: false };

    case UPDATE_POST_LIKE:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post._id === action.payload._id) {
            return { ...post, ...action.payload };
          }
          return post;
        }),
      };

    case CREATE_POST:
      return { ...state, posts: [action.payload, ...state.posts] };

    case REMOVE_POST:
      return { ...state, posts: state.posts.filter(post => post._id !== action.payload) };

    default:
      return state;
  }
};

export default reducer;

// Action Creators
//
export const loadPosts = () => ({ type: LOAD });
export const updatePosts = payload => ({ type: UPDATE_POSTS, payload });
export const updatePost = payload => ({ type: UPDATE_POST, payload });
export const createPost = payload => ({ type: CREATE_POST, payload });
export const removePost = payload => ({ type: REMOVE_POST, payload });
export const updatePostLike = payload => ({ type: UPDATE_POST_LIKE, payload });

// Side effects, only as applicable (thunks)
//
// Add Post
export const addPost = postData => async dispatch => {
  try {
    dispatch(clearErrors());
    const res = await axios.post(`${process.env.REACT_APP_ENDPOINT}/post`, postData);

    dispatch(createPost(res.data));
  } catch (error) {
    dispatch(updateErrors(error.response.data));
  }
};

// Get Posts
export const getPosts = () => async dispatch => {
  try {
    dispatch(loadPosts());
    const res = await axios.get(
      `${
        process.env.REACT_APP_ENDPOINT
      }/post?%24embed=byProfile&%24embed=byArtist&%24embed=likes&%24embed=comments`,
    );

    dispatch(updatePosts(res.data));
  } catch (error) {
    dispatch(updatePosts(null));
  }
};

// Get Post
export const getPost = id => async dispatch => {
  try {
    dispatch(loadPosts());
    const res = await axios.get(`${process.env.REACT_APP_ENDPOINT}/post/${id}`);

    dispatch(updatePost(res.data));
  } catch (error) {
    dispatch(updatePost(null));
  }
};

// Delete Post
export const deletePost = id => async dispatch => {
  try {
    await axios.delete(`${process.env.REACT_APP_ENDPOINT}/post/${id}`);

    dispatch(removePost(id));
  } catch (error) {
    dispatch(updateErrors(error.response.data));
  }
};

// Add Like
export const addLike = id => async dispatch => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_ENDPOINT}/post/like/${id}`);

    dispatch(updatePostLike(res.data));
  } catch (error) {
    dispatch(updateErrors(error.response.data));
  }
};

// Remove Like
export const removeLike = id => async dispatch => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_ENDPOINT}/post/unlike/${id}`);

    dispatch(updatePostLike(res.data));
  } catch (error) {
    dispatch(updateErrors(error.response.data));
  }
};

// Add Comment
export const addComment = (postId, commentData) => async dispatch => {
  try {
    dispatch(clearErrors());
    const res = await axios.post(
      `${process.env.REACT_APP_ENDPOINT}/post/comment/${postId}`,
      commentData,
    );

    dispatch(updatePost(res.data));
  } catch (error) {
    dispatch(updateErrors(error.response.data));
  }
};

// Delete Comment
export const deleteComment = (postId, commentId) => async dispatch => {
  try {
    const res = await axios.delete(
      `${process.env.REACT_APP_ENDPOINT}/post/comment/${postId}/${commentId}`,
    );

    dispatch(updatePost(res.data));
  } catch (error) {
    dispatch(updateErrors(error.response.data));
  }
};
