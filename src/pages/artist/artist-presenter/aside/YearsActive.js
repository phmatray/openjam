import React from 'react';
import PropTypes from 'prop-types';

import { Header } from 'semantic-ui-react';
import getYears from '../../../../utils/getYears';

const YearsActive = ({ years }) => (
  <React.Fragment>
    <Header as="h3">Years active</Header>
    {getYears(years)}
    <br />
  </React.Fragment>
);

YearsActive.propTypes = {
  years: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default YearsActive;
