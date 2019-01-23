// @flow

import { combineReducers } from 'redux';
import type { CombinedReducer } from 'redux';

import type { Action } from 'lib/types';

import layout from './ui/layout';
import player from './ui/player';
import views from './ui/views';
import type { StateLayout } from './ui/layout';
import type { StatePlayer } from './ui/player';

export type StateUI = {
  layout: StateLayout,
  player: StatePlayer,
  views: any,
};

const ui: CombinedReducer<StateUI, Action> = combineReducers({
  layout,
  player,
  views,
});

export default ui;
