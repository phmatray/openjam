// @flow

import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';

const GridContent = styled(Grid).attrs({
  textAlign: 'center',
  verticalAlign: 'middle',
  columns: 'equal',
})`
  height: 100%;
  max-width: 1040;
  margin-left: auto;
  margin-right: auto;
  color: #fff;
`;

export default GridContent;
