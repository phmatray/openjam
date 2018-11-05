import axios from 'axios';

// Actions
//
const FETCH_REPOS_ERROR = 'github/FETCH_REPOS_ERROR';
const FETCH_REPOS_PENDING = 'github/FETCH_REPOS_PENDING';
const FETCH_REPOS_SUCCESS = 'github/FETCH_REPOS_SUCCESS';

// Reducer
//
const initialState = {
  repos: null,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_REPOS_ERROR:
      return {
        ...state,
        error: action.payload,
        repos: null,
        loading: false,
      };

    case FETCH_REPOS_PENDING:
      return {
        ...state,
        loading: true,
      };

    case FETCH_REPOS_SUCCESS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;

// Action Creators
//
export const fetchReposError = error => ({ type: FETCH_REPOS_ERROR, payload: error });
export const fetchReposPending = () => ({ type: FETCH_REPOS_PENDING });
export const fetchReposSuccess = response => ({ type: FETCH_REPOS_SUCCESS, payload: response });

// Side effects, only as applicable (thunks)
//
// Fetch last 5 repos of a user
export const fetchRepos = username => dispatch => {
  dispatch(fetchReposPending());

  axios
    .get(`${process.env.REACT_APP_ENDPOINT}/github/repos/${username}`)
    .then(res => dispatch(fetchReposSuccess(res.data)))
    .catch(err => dispatch(fetchReposError(err)));
};
