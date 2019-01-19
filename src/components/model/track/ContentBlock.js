// @flow

import type { ComponentType } from 'react';
import styled from 'styled-components';

import Wrapper from './cover-toggle/Wrapper';
import Overlay from './cover-toggle/Overlay';

type Props = {
  active: boolean,
};

const ContentBlock: ComponentType<Props> = styled.div`
  display: flex;
  width: 100%;
  max-width: calc(340px + 0.9em);
  height: calc(55px);
  margin-right: 0.9em;

  ${Wrapper} ${Overlay} {
    opacity: ${props => (props.active ? 1 : 0)};
  }

  &:hover ${Wrapper} ${Overlay} {
    opacity: 1;
  }
`;

export default ContentBlock;
