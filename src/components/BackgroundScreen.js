import React from 'react';
import PropTypes from 'prop-types';

import { FullHeightContainer, BackgroundOverlay } from './background-screen/Atoms';

const BackgroundScreen = ({ children }) => (
  <FullHeightContainer>
    <BackgroundOverlay>{children}</BackgroundOverlay>
  </FullHeightContainer>
);

BackgroundScreen.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BackgroundScreen;
