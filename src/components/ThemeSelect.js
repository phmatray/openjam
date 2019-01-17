// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';

import { actions } from '../reducers/ui/layout';

type Props = {
  updateTheme: () => void,
};

const themes = [
  {
    text: 'OpenJam',
    value: 'openjam',
  },
  {
    text: 'FG Remix',
    value: 'remix',
  },
];

const ThemeSelect = ({ updateTheme }: Props) => (
  <Dropdown selection options={themes} onChange={(e, { value }) => updateTheme(value)} />
);

export default connect(
  null,
  { updateTheme: actions.updateTheme },
)(ThemeSelect);
