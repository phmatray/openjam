// @flow

import type { ComponentType } from 'react';
import styled from 'styled-components';
import { TableRow } from 'semantic-ui-react';

import { Wrapper, Overlay } from './cover-toggle/Atoms';

type Props = {
  active: boolean,
};

const Row: ComponentType<Props> = styled(TableRow)`
  ${Wrapper} ${Overlay} {
    opacity: ${props => (props.active ? 1 : 0)};
  }

  &:hover ${Wrapper} ${Overlay} {
    opacity: 1;
  }
`;

export default Row;
