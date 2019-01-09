import { actions as errorActions } from '../../../data/error';
import {
  restGetPosts,
  restGetPost,
  restDeletePost,
  restAddPost,
  restAddPostLike,
  restDeletePostLike,
  restAddPostComment,
  restDeletePostComment,
} from '../../../../api/logion';

// Action Types
//
export const types = {
  LOAD: 'post/LOAD',
  UPDATE_POSTS: 'post/UPDATE_POSTS',
  CREATE_POST: 'post/CREATE_POST',
  UPDATE_POST: 'post/UPDATE_POST',
  UPDATE_POST_LIKE: 'post/UPDATE_POST_LIKE',
  REMOVE_POST: 'post/REMOVE_POST',
};

// Reducer
//
export const initialState = {
  posts: [],
  post: {},
  loading: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.LOAD:
      return { ...state, loading: true };

    case types.UPDATE_POSTS:
      return { ...state, posts: action.payload, loading: false };

    case types.UPDATE_POST:
      return { ...state, post: action.payload, loading: false };

    case types.UPDATE_POST_LIKE:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post._id === action.payload._id) {
            return { ...post, ...action.payload };
          }
          return post;
        }),
      };

    case types.CREATE_POST:
      return { ...state, posts: [action.payload, ...state.posts] };

    case types.REMOVE_POST:
      return { ...state, posts: state.posts.filter(post => post._id !== action.payload) };

    default:
      return state;
  }
};

export default reducer;

// Selectors
//
export const getPosts = state => state.ui.pages.share.posts;
export const getPost = state => state.ui.pages.share.post;
export const getLoading = state => state.ui.pages.share.loading;

// Action Creators
//
export const actions = {
  loadPosts: () => ({ type: types.LOAD }),

  updatePosts: payload => {
    const posts = payload && payload.docs ? payload.docs : payload;
    return { type: types.UPDATE_POSTS, payload: posts };
  },

  updatePost: payload => ({ type: types.UPDATE_POST, payload }),
  createPost: payload => ({ type: types.CREATE_POST, payload }),
  removePost: payload => ({ type: types.REMOVE_POST, payload }),
  updatePostLike: payload => ({ type: types.UPDATE_POST_LIKE, payload }),
};

// Side effects, only as applicable (thunks)
//
// Add Post
export const addPost = postData => async (dispatch, getState) => {
  try {
    console.warn(postData);
    dispatch(errorActions.clearErrors());
    const res = await restAddPost(postData);

    const post = res.data;
    const { user } = getState().auth;
    delete post.byUser;
    post.byUser = user;

    console.warn(post);

    dispatch(actions.createPost(post));
  } catch (error) {
    dispatch(errorActions.updateErrors(error.response.data));
  }
};

// Get Posts
export const fetchPosts = () => async dispatch => {
  try {
    dispatch(actions.loadPosts());
    const res = await restGetPosts();
    dispatch(actions.updatePosts(res.data));
  } catch (error) {
    dispatch(actions.updatePosts(initialState.posts));
  }
};

// Get Post
export const fetchPost = id => async dispatch => {
  try {
    dispatch(actions.loadPosts());
    const res = await restGetPost(id);
    dispatch(actions.updatePost(res.data));
  } catch (error) {
    dispatch(actions.updatePost(null));
  }
};

// Delete Post
export const deletePost = id => async dispatch => {
  try {
    await restDeletePost(id);
    dispatch(actions.removePost(id));
  } catch (error) {
    dispatch(errorActions.updateErrors(error.response.data));
  }
};

// Add Like
export const addLike = id => async dispatch => {
  try {
    const res = await restAddPostLike(id);
    dispatch(actions.updatePostLike(res.data));
  } catch (error) {
    dispatch(errorActions.updateErrors(error.response.data));
  }
};

// Remove Like
export const removeLike = id => async dispatch => {
  try {
    const res = await restDeletePostLike(id);
    dispatch(actions.updatePostLike(res.data));
  } catch (error) {
    dispatch(errorActions.updateErrors(error.response.data));
  }
};

// Add Comment
export const addComment = (postId, commentData) => async dispatch => {
  try {
    dispatch(errorActions.clearErrors());
    const res = await restAddPostComment(postId, commentData);
    dispatch(actions.updatePost(res.data));
  } catch (error) {
    dispatch(errorActions.updateErrors(error.response.data));
  }
};

// Delete Comment
export const deleteComment = (postId, commentId) => async dispatch => {
  try {
    const res = await restDeletePostComment(postId, commentId);
    dispatch(actions.updatePost(res.data));
  } catch (error) {
    dispatch(errorActions.updateErrors(error.response.data));
  }
};
