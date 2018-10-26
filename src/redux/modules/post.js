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

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };

    case UPDATE_POST:
      return {
        ...state,
        post: action.payload,
        loading: false,
      };

    case UPDATE_POST_LIKE:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post._id === action.payload._id) {
            return {
              ...post,
              ...action.payload,
            };
          } else {
            return post;
          }
        }),
      };

    case CREATE_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };

    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload),
      };

    default:
      return state;
  }
}

// Action Creators
//
export function loadPosts() {
  return { type: LOAD };
}

export function updatePosts(payload) {
  return { type: UPDATE_POSTS, payload };
}

export function updatePost(payload) {
  return { type: UPDATE_POST, payload };
}

export function createPost(payload) {
  return { type: CREATE_POST, payload };
}

export function removePost(payload) {
  return { type: REMOVE_POST, payload };
}

export function updatePostLike(payload) {
  return { type: UPDATE_POST_LIKE, payload };
}

// Side effects, only as applicable (thunks)
//
// Add Post
export function addPost(postData) {
  return dispatch => {
    dispatch(clearErrors());
    axios
      .post('/api/posts', postData)
      .then(res => dispatch(createPost(res.data)))
      .catch(err => dispatch(updateErrors(err.response.data)));
  };
}

// Get Posts
export function getPosts() {
  return dispatch => {
    dispatch(loadPosts());
    axios
      .get('/api/posts')
      .then(res => dispatch(updatePosts(res.data)))
      .catch(err => dispatch(updatePosts(null)));
  };
}

// Get Post
export function getPost(id) {
  return dispatch => {
    dispatch(loadPosts());
    axios
      .get(`/api/posts/${id}`)
      .then(res => dispatch(updatePost(res.data)))
      .catch(err => dispatch(updatePost(null)));
  };
}

// Delete Post
export function deletePost(id) {
  return dispatch => {
    axios
      .delete(`/api/posts/${id}`)
      .then(res => dispatch(removePost(id)))
      .catch(err => dispatch(updateErrors(err.response.data)));
  };
}

// Add Like
export function addLike(id) {
  return dispatch => {
    axios
      .post(`/api/posts/like/${id}`)
      .then(res => dispatch(updatePostLike(res.data)))
      .catch(err => dispatch(updateErrors(err.response.data)));
  };
}

// Remove Like
export function removeLike(id) {
  return dispatch => {
    axios
      .post(`/api/posts/unlike/${id}`)
      .then(res => dispatch(updatePostLike(res.data)))
      .catch(err => dispatch(updateErrors(err.response.data)));
  };
}

// Add Comment
export function addComment(postId, commentData) {
  return dispatch => {
    dispatch(clearErrors());
    axios
      .post(`/api/posts/comment/${postId}`, commentData)
      .then(res => dispatch(updatePost(res.data)))
      .catch(err => dispatch(updateErrors(err.response.data)));
  };
}

// Delete Comment
export function deleteComment(postId, commentId) {
  return dispatch => {
    axios
      .delete(`/api/posts/comment/${postId}/${commentId}`)
      .then(res => dispatch(updatePost(res.data)))
      .catch(err => dispatch(updateErrors(err.response.data)));
  };
}
