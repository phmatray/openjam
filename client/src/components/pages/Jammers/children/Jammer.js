import React from 'react';
import PropTypes from 'prop-types';
import { Card, Responsive } from 'semantic-ui-react';
import ProfileCardMobile from './ProfileCardMobile';
import ProfileCardDefault from './ProfileCardDefault';

const Jammer = ({ jammer }) => {
  return (
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
};

Jammer.propTypes = {
  jammer: PropTypes.object.isRequired,
};

export default Jammer;
