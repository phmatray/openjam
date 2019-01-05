// Actions
//
export const types = {
  UPDATE_LANGUAGE: 'layout/UPDATE_LANGUAGE',
  UPDATE_THEME: 'layout/UPDATE_THEME',
  SHOW_PENDING: 'layout/SHOW_PENDING',
  HIDE_PENDING: 'layout/HIDE_PENDING',
  SHOW_SIDEBAR: 'layout/SHOW_SIDEBAR',
  HIDE_SIDEBAR: 'layout/HIDE_SIDEBAR',
  TOGGLE_SIDEBAR: 'layout/TOGGLE_SIDEBAR',
};

// Reducer
//
export const initialState = {
  language: process.env.REACT_APP_LANGUAGE || 'en',
  theme: process.env.REACT_APP_THEME || 'openjam',
  playerVisible: true,
  pendingVisible: false,
  sidebarVisible: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.UPDATE_LANGUAGE:
      return { ...state, language: action.payload };

    case types.UPDATE_THEME:
      return { ...state, theme: action.payload };

    case types.SHOW_PENDING:
      return { ...state, pendingVisible: true };

    case types.HIDE_PENDING:
      return { ...state, pendingVisible: false };

    case types.SHOW_SIDEBAR:
      return { ...state, sidebarVisible: true };

    case types.HIDE_SIDEBAR:
      return { ...state, sidebarVisible: false };

    case types.TOGGLE_SIDEBAR:
      return { ...state, sidebarVisible: !state.sidebarVisible };

    default:
      return state;
  }
};

export default reducer;

// Action Creators
//
export const actions = {
  updateLanguage: language => ({ type: types.UPDATE_LANGUAGE, payload: language }),
  updateTheme: theme => ({ type: types.UPDATE_THEME, payload: theme }),
  showPending: () => ({ type: types.SHOW_PENDING }),
  hidePending: () => ({ type: types.HIDE_PENDING }),
  showSidebar: () => ({ type: types.SHOW_SIDEBAR }),
  hideSidebar: () => ({ type: types.HIDE_SIDEBAR }),
  toggleSidebar: () => ({ type: types.TOGGLE_SIDEBAR }),
};
