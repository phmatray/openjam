// @flow

import React from 'react';
import { Card, Responsive } from 'semantic-ui-react';
import ProfileCardMobile from './ProfileCardMobile';
import ProfileCardDefault from './ProfileCardDefault';

type Props = {
  jammer: {},
};

const Jammer = ({ jammer }: Props) => (
  <React.Fragment>
    <Responsive as={Card} {...Responsive.onlyMobile}>
      <ProfileCardMobile profile={jammer} />
    </Responsive>
    <Responsive as={Card} {...Responsive.onlyTablet}>
      <ProfileCardDefault profile={jammer} />
    </Responsive>
    <Responsive as={Card} {...Responsive.onlyComputer}>
      <ProfileCardDefault profile={jammer} />
    </Responsive>
  </React.Fragment>
);

export default Jammer;
