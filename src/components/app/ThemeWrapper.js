import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import themeOpenjam from '../../theme/themeOpenjam';
import themeRemix from '../../theme/themeRemix';

const ThemeWrapper = ({ theme, children }) => {
  let themeContent;
  switch (theme) {
    case 'openjam':
      themeContent = themeOpenjam;
      break;

    case 'remix':
      themeContent = themeRemix;
      break;

    default:
      break;
  }

  return <ThemeProvider theme={themeContent}>{children}</ThemeProvider>;
};

ThemeWrapper.propTypes = {
  children: PropTypes.any.isRequired,
};

const mapStateToProps = state => ({
  theme: state.layout.theme,
});

export default withRouter(connect(mapStateToProps)(ThemeWrapper));
