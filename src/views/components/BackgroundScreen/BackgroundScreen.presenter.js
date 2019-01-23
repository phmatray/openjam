// @flow

import * as React from 'react';

import FullHeightContainer from './styled/FullHeightContainer';
import BackgroundOverlay from './styled/BackgroundOverlay';

type Props = {
  children: React.Node,
};

const BackgroundScreen = ({ children }: Props) => (
  <FullHeightContainer>
    <BackgroundOverlay>{children}</BackgroundOverlay>
  </FullHeightContainer>
);

export default BackgroundScreen;
