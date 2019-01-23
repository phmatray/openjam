// @flow

import withTheme from 'views/hocs/withTheme';
import { withNamespaces } from 'react-i18next';

import Player from './Player.container';

export default withTheme(withNamespaces('common')(Player));
