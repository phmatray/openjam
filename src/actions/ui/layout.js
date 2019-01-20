// @flow

import types from '../types/layout-types';
import type { LayoutAction, ThunkAction } from '../../types';

export function updateLanguage(language: string): LayoutAction {
  return { type: types.UPDATE_LANGUAGE, language };
}

export function updateTheme(theme: string): LayoutAction {
  return { type: types.UPDATE_THEME, theme };
}

export function showPending(): LayoutAction {
  return { type: types.SHOW_PENDING };
}

export function hidePending(): LayoutAction {
  return { type: types.HIDE_PENDING };
}

export function showSidebar(): LayoutAction {
  return { type: types.SHOW_SIDEBAR };
}

export function hideSidebar(): LayoutAction {
  return { type: types.HIDE_SIDEBAR };
}

export function toggleSidebar(): ThunkAction {
  return (dispatch, getState) => {
    const { sidebarVisible } = getState().ui.layout;
    dispatch({ type: types.TOGGLE_SIDEBAR, sidebarVisible: !sidebarVisible });
  };
}
