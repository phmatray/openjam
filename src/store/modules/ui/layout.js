// @flow

import { combineReducers } from 'redux';
import type { CombinedReducer } from 'redux';
import { createSelector } from 'reselect';
import type { SelectorCreator } from 'reselect';

import type { StateRoot } from 'reducer';
import type { LayoutAction, ThunkAction } from 'lib/types';

export type StateLayout = {
  language: string,
  theme: string,
  playerVisible: boolean,
  pendingVisible: boolean,
  sidebarVisible: boolean,
};

const Action = {
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
const language = (state: string = process.env.REACT_APP_LANGUAGE || 'en', action: LayoutAction) => {
  switch (action.type) {
    case Action.UPDATE_LANGUAGE:
      return action.language;
    default:
      return state;
  }
};

const theme = (state: string = process.env.REACT_APP_THEME || 'openjam', action: LayoutAction) => {
  switch (action.type) {
    case Action.UPDATE_THEME:
      return action.theme;
    default:
      return state;
  }
};

const playerVisible = (state: boolean = true, action: LayoutAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

const pendingVisible = (state: boolean = false, action: LayoutAction) => {
  switch (action.type) {
    case Action.SHOW_PENDING:
      return true;
    case Action.HIDE_PENDING:
      return false;
    default:
      return state;
  }
};

const sidebarVisible = (state: boolean = false, action: LayoutAction) => {
  switch (action.type) {
    case Action.SHOW_SIDEBAR:
      return true;
    case Action.HIDE_SIDEBAR:
      return false;
    case Action.TOGGLE_SIDEBAR:
      return action.sidebarVisible;
    default:
      return state;
  }
};

const reducers = {
  language,
  theme,
  playerVisible,
  pendingVisible,
  sidebarVisible,
};

const layout: CombinedReducer<StateLayout, LayoutAction> = combineReducers(reducers);

export default layout;

export function updateLanguage(language: string): LayoutAction {
  return { type: Action.UPDATE_LANGUAGE, language };
}

export function updateTheme(theme: string): LayoutAction {
  return { type: Action.UPDATE_THEME, theme };
}

export function showPending(): LayoutAction {
  return { type: Action.SHOW_PENDING };
}

export function hidePending(): LayoutAction {
  return { type: Action.HIDE_PENDING };
}

export function showSidebar(): LayoutAction {
  return { type: Action.SHOW_SIDEBAR };
}

export function hideSidebar(): LayoutAction {
  return { type: Action.HIDE_SIDEBAR };
}

export function toggleSidebar(): ThunkAction {
  return (dispatch, getState) => {
    const { sidebarVisible } = getState().ui.layout;
    dispatch({ type: Action.TOGGLE_SIDEBAR, sidebarVisible: !sidebarVisible });
  };
}

// Selectors
//
export const getLayout = (state: StateRoot) => state.ui.layout;

export const getLanguage: SelectorCreator = createSelector(
  [getLayout],
  layout => layout.language,
);

export const getTheme: SelectorCreator = createSelector(
  [getLayout],
  layout => layout.theme,
);

export const getPlayerVisible: SelectorCreator = createSelector(
  [getLayout],
  layout => layout.playerVisible,
);

export const getPendingVisible: SelectorCreator = createSelector(
  [getLayout],
  layout => layout.pendingVisible,
);

export const getSidebarVisible: SelectorCreator = createSelector(
  [getLayout],
  layout => layout.sidebarVisible,
);
