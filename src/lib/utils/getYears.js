// @flow

import type { Year } from '../../types';

const getYears = (years: Year[]) =>
  years
    .reverse()
    .map(_ => {
      if (!_.to) {
        return `${_.from}`;
      }

      return _.from === _.to ? `${_.from}` : `${_.from}-${_.to}`;
    })
    .join(', ');

export default getYears;
