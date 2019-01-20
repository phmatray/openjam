// @flow

import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import types from '../../../actions/types/layout-types';
import type { LayoutAction } from '../../../types';

type State = {
  ui: {
    layout: {
      language: string,
      theme: string,
      playerVisible: boolean,
      pendingVisible: boolean,
      sidebarVisible: boolean,
    },
  },
};

// Reducer
//
const language = (state: string = process.env.REACT_APP_LANGUAGE || 'en', action: LayoutAction) => {
  switch (action.type) {
    case types.UPDATE_LANGUAGE:
      return action.language;
    default:
      return state;
  }
};

const theme = (state: string = process.env.REACT_APP_THEME || 'openjam', action: LayoutAction) => {
  switch (action.type) {
    case types.UPDATE_THEME:
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
    case types.SHOW_PENDING:
      return true;
    case types.HIDE_PENDING:
      return false;
    default:
      return state;
  }
};

const sidebarVisible = (state: boolean = false, action: LayoutAction) => {
  switch (action.type) {
    case types.SHOW_SIDEBAR:
      return true;
    case types.HIDE_SIDEBAR:
      return false;
    case types.TOGGLE_SIDEBAR:
      return action.sidebarVisible;
    default:
      return state;
  }
};

const layout = combineReducers({
  language,
  theme,
  playerVisible,
  pendingVisible,
  sidebarVisible,
});

export default layout;

// Selectors
//
export const getLayout = (state: State) => state.ui.layout;

export const getLanguage = createSelector(
  [getLayout],
  layout => layout.language,
);

export const getTheme = createSelector(
  [getLayout],
  layout => layout.theme,
);

export const getPlayerVisible = createSelector(
  [getLayout],
  layout => layout.playerVisible,
);

export const getPendingVisible = createSelector(
  [getLayout],
  layout => layout.pendingVisible,
);

export const getSidebarVisible = createSelector(
  [getLayout],
  layout => layout.sidebarVisible,
);
