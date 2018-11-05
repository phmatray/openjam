// Actions
//
const SHOW_PENDING = 'layout/SHOW_PENDING';
const HIDE_PENDING = 'layout/HIDE_PENDING';
const SHOW_SIDEBAR = 'layout/SHOW_SIDEBAR';
const HIDE_SIDEBAR = 'layout/HIDE_SIDEBAR';
const TOGGLE_SIDEBAR = 'layout/TOGGLE_SIDEBAR';

// Reducer
//
const initialState = {
  playerVisible: true,
  pendingVisible: false,
  sidebarVisible: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
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
export const showPending = () => ({ type: SHOW_PENDING });
export const hidePending = () => ({ type: HIDE_PENDING });
export const showSidebar = () => ({ type: SHOW_SIDEBAR });
export const hideSidebar = () => ({ type: HIDE_SIDEBAR });
export const toggleSidebar = () => ({ type: TOGGLE_SIDEBAR });
