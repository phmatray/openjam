// @flow

import * as React from 'react';

import { FullHeightContainer, BackgroundOverlay } from './background-screen/Atoms';

type Props = {
  children: React.Node,
};

const BackgroundScreen = ({ children }: Props) => (
  <FullHeightContainer>
    <BackgroundOverlay>{children}</BackgroundOverlay>
  </FullHeightContainer>
);

export default BackgroundScreen;
