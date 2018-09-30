import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from '../../../../validation/is-empty';
import { Card, Image, Label } from 'semantic-ui-react';

const ProfileCardMobile = ({ profile }) => (
  <React.Fragment>
    <Card.Content>
      <Image floated="left" size="mini" src={profile.user.avatar} />
      <Card.Header>
        <Link to={`/profile/${profile.handle}`}>
          {profile.user.firstname} {profile.user.lastname}
        </Link>
      </Card.Header>
      <Card.Meta>{isEmpty(profile.location) ? null : <span>{profile.location}</span>}</Card.Meta>
    </Card.Content>
    <Card.Content extra>
      {profile.skills.slice(0, 4).map((skill, index) => (
        <Label basic key={index}>
          {skill}
        </Label>
      ))}
    </Card.Content>
  </React.Fragment>
);

ProfileCardMobile.propTypes = {
  profile: PropTypes.shape({
    user: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
    }).isRequired,
    handle: PropTypes.string.isRequired,
    location: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string.isRequired),
  }).isRequired,
};

export default ProfileCardMobile;
