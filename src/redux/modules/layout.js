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

export default function reducer(state = initialState, action = {}) {
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
}

// Action Creators
//
export function showPending() {
  return { type: SHOW_PENDING };
}

export function hidePending() {
  return { type: HIDE_PENDING };
}

export function showSidebar() {
  return { type: SHOW_SIDEBAR };
}

export function hideSidebar() {
  return { type: HIDE_SIDEBAR };
}

export function toggleSidebar() {
  return { type: TOGGLE_SIDEBAR };
}
