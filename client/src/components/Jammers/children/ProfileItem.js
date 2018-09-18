import React from 'react';
import PropTypes from 'prop-types';
import { Card, Responsive } from 'semantic-ui-react';
import ProfileCardMobile from './ProfileCardMobile';
import ProfileCardDefault from './ProfileCardDefault';

const ProfileItem = ({ profile }) => {
  return (
    <React.Fragment>
      <Responsive as={Card} {...Responsive.onlyMobile}>
        <ProfileCardMobile profile={profile} />
      </Responsive>
      <Responsive as={Card} {...Responsive.onlyTablet}>
        <ProfileCardDefault profile={profile} />
      </Responsive>
      <Responsive as={Card} {...Responsive.onlyComputer}>
        <ProfileCardDefault profile={profile} />
      </Responsive>
    </React.Fragment>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
