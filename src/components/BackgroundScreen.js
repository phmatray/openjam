// @flow

import * as React from 'react';

import FullHeightContainer from './background-screen/FullHeightContainer';
import BackgroundOverlay from './background-screen/BackgroundOverlay';

type Props = {
  children: React.Node,
};

const BackgroundScreen = ({ children }: Props) => (
  <FullHeightContainer>
    <BackgroundOverlay>{children}</BackgroundOverlay>
  </FullHeightContainer>
);

export default BackgroundScreen;
