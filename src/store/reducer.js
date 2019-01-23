// @flow

import { combineReducers } from 'redux';
import type { CombinedReducer } from 'redux';

import type { Action } from 'lib/types';

import auth from './modules/auth';
import data from './modules/data';
import ui from './modules/ui';
import type { StateAuth } from './modules/auth';
import type { StateData } from './modules/data';
import type { StateUI } from './modules/ui';

export type StateRoot = {
  auth: StateAuth,
  data: StateData,
  ui: StateUI,
};

const rootReducer: CombinedReducer<StateRoot, Action> = combineReducers({
  auth,
  data,
  ui,
});

export default rootReducer;
