// @flow

import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import themeOpenjam from 'lib/theme/themeOpenjam';
import themeRemix from 'lib/theme/themeRemix';
import { getTheme } from 'store/modules/ui/layout';

type Props = {
  theme: any,
  children: React.Node,
};

const ThemeWrapper = ({ theme, children }: Props) => {
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

const mapStateToProps = state => ({
  theme: getTheme(state),
});

export default withRouter(connect(mapStateToProps)(ThemeWrapper));
