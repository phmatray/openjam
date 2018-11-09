// Actions
//
const UPDATE_LANGUAGE = 'layout/UPDATE_LANGUAGE';
const UPDATE_THEME = 'layout/UPDATE_THEME';
const SHOW_PENDING = 'layout/SHOW_PENDING';
const HIDE_PENDING = 'layout/HIDE_PENDING';
const SHOW_SIDEBAR = 'layout/SHOW_SIDEBAR';
const HIDE_SIDEBAR = 'layout/HIDE_SIDEBAR';
const TOGGLE_SIDEBAR = 'layout/TOGGLE_SIDEBAR';

// Reducer
//
const initialState = {
  language: process.env.REACT_APP_LANGUAGE || 'en',
  theme: process.env.REACT_APP_THEME || 'openjam',
  playerVisible: true,
  pendingVisible: false,
  sidebarVisible: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_LANGUAGE:
      return { ...state, language: action.payload };
    case UPDATE_THEME:
      return { ...state, theme: action.payload };
    case SHOW_PENDING:
      return { ...state, pendingVisible: true };
    case HIDE_PENDING:
      return { ...state, pendingVisible: false };
    case SHOW_SIDEBAR:
      return { ...state, sidebarVisible: true };
    case HIDE_SIDEBAR:
      return { ...state, sidebarVisible: false };
    case TOGGLE_SIDEBAR:
      return { ...state, sidebarVisible: !state.sidebarVisible };

    default:
      return state;
  }
};

export default reducer;

// Action Creators
//
export const updateLanguage = language => ({ type: UPDATE_LANGUAGE, payload: language });
export const updateTheme = theme => ({ type: UPDATE_THEME, payload: theme });
export const showPending = () => ({ type: SHOW_PENDING });
export const hidePending = () => ({ type: HIDE_PENDING });
export const showSidebar = () => ({ type: SHOW_SIDEBAR });
export const hideSidebar = () => ({ type: HIDE_SIDEBAR });
export const toggleSidebar = () => ({ type: TOGGLE_SIDEBAR });
