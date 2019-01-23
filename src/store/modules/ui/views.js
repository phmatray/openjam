// @flow

import { combineReducers } from 'redux';
import type { CombinedReducer } from 'redux';

import type { Action } from 'lib/types';

import dashboard from './views/dashboard';
import explore from './views/explore';
import share from './views/share';

export type StateViews = {
  dashboard: any,
  explore: any,
  share: any,
};

const views: CombinedReducer<StateViews, Action> = combineReducers({
  dashboard,
  explore,
  share,
});

export default views;
