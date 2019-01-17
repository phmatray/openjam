// @flow

import { css } from 'styled-components';

const ifStyled = (method, condition) => (...names) => (...args) => props =>
  names[method](name => Boolean(props[name]) === condition) && css(...args);

export const is = ifStyled('every', true);
export const isOr = ifStyled('some', true);
export const isNot = ifStyled('every', false);
export const isSomeNot = ifStyled('some', false);

export default is;
