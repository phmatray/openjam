// @flow

import React from 'react';
import { Header } from 'semantic-ui-react';

import getYears from '../../../../lib/utils/getYears';
import type { Year } from '../../../../types';

type Props = {
  years: Year[],
};

const YearsActive = ({ years }: Props) => (
  <React.Fragment>
    <Header as="h3">Years active</Header>
    {getYears(years)}
    <br />
  </React.Fragment>
);

export default YearsActive;
