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
      return { ...state, posts: action.payload, loading: false };

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
export const addPost = postData => dispatch => {
  dispatch(clearErrors());
  axios
    .post(`${process.env.REACT_APP_ENDPOINT}/posts`, postData)
    .then(res => dispatch(createPost(res.data)))
    .catch(err => dispatch(updateErrors(err.response.data)));
};

// Get Posts
export const getPosts = () => dispatch => {
  dispatch(loadPosts());
  axios
    .get(`${process.env.REACT_APP_ENDPOINT}/posts`)
    .then(res => dispatch(updatePosts(res.data)))
    .catch(() => dispatch(updatePosts(null)));
};

// Get Post
export const getPost = id => dispatch => {
  dispatch(loadPosts());
  axios
    .get(`${process.env.REACT_APP_ENDPOINT}/posts/${id}`)
    .then(res => dispatch(updatePost(res.data)))
    .catch(() => dispatch(updatePost(null)));
};

// Delete Post
export const deletePost = id => dispatch => {
  axios
    .delete(`${process.env.REACT_APP_ENDPOINT}/posts/${id}`)
    .then(() => dispatch(removePost(id)))
    .catch(err => dispatch(updateErrors(err.response.data)));
};

// Add Like
export const addLike = id => dispatch => {
  axios
    .post(`${process.env.REACT_APP_ENDPOINT}/posts/like/${id}`)
    .then(res => dispatch(updatePostLike(res.data)))
    .catch(err => dispatch(updateErrors(err.response.data)));
};

// Remove Like
export const removeLike = id => dispatch => {
  axios
    .post(`${process.env.REACT_APP_ENDPOINT}/posts/unlike/${id}`)
    .then(res => dispatch(updatePostLike(res.data)))
    .catch(err => dispatch(updateErrors(err.response.data)));
};

// Add Comment
export const addComment = (postId, commentData) => dispatch => {
  dispatch(clearErrors());
  axios
    .post(`${process.env.REACT_APP_ENDPOINT}/posts/comment/${postId}`, commentData)
    .then(res => dispatch(updatePost(res.data)))
    .catch(err => dispatch(updateErrors(err.response.data)));
};

// Delete Comment
export const deleteComment = (postId, commentId) => dispatch => {
  axios
    .delete(`${process.env.REACT_APP_ENDPOINT}/posts/comment/${postId}/${commentId}`)
    .then(res => dispatch(updatePost(res.data)))
    .catch(err => dispatch(updateErrors(err.response.data)));
};
