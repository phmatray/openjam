import styled from 'styled-components';
import { TableRow } from 'semantic-ui-react';
import Wrapper from './cover-toggle/Wrapper';
import Overlay from './cover-toggle/Overlay';

const Row = styled(TableRow)`
  ${Wrapper} ${Overlay} {
    opacity: ${props => (props.active ? 1 : 0)};
  }

  &:hover ${Wrapper} ${Overlay} {
    opacity: 1;
  }
`;

export default Row;
