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

export default function reducer(state = initialState, action = {}) {
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
}

// Action Creators
//
export function fetchReposError(error) {
  return { type: FETCH_REPOS_ERROR, payload: error };
}

export function fetchReposPending() {
  return { type: FETCH_REPOS_PENDING };
}

export function fetchReposSuccess(response) {
  return { type: FETCH_REPOS_SUCCESS, payload: response };
}

// Side effects, only as applicable (thunks)
//
// Fetch last 5 repos of a user
export function fetchRepos(username) {
  return dispatch => {
    dispatch(fetchReposPending());

    axios
      .get(`https://api.openjam.eu/api/github/repos/${username}`)
      .then(res => dispatch(fetchReposSuccess(res.data)))
      .catch(err => dispatch(fetchReposError(err)));
  };
}
