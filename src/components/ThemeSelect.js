import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';

import { updateTheme } from '../redux/modules/layout';

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

const ThemeSelect = ({ updateTheme }) => (
  <Dropdown selection options={themes} onChange={(e, { value }) => updateTheme(value)} />
);

ThemeSelect.propTypes = {
  updateTheme: PropTypes.func.isRequired,
};

export default connect(
  null,
  { updateTheme },
)(ThemeSelect);
