import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Image, Label } from 'semantic-ui-react';
import isEmpty from '../../../utils/validation/is-empty';

const ProfileCardDefault = ({ profile }) => (
  <React.Fragment>
    <Link to={`/jammer/${profile.handle}`}>
      <Image src={profile.profileImageUrl} size="medium" />
    </Link>
    <Card.Content>
      <Card.Header>
        <Link to={`/jammer/${profile.handle}`}>{`${profile.firstName} ${profile.lastName}`}</Link>
      </Card.Header>
      <Card.Meta>{isEmpty(profile.location) ? null : <span>{profile.location}</span>}</Card.Meta>
    </Card.Content>
    <Card.Content extra>
      {profile.skills &&
        profile.skills.slice(0, 4).map((skill, index) => (
          <Label basic key={index}>
            {skill}
          </Label>
        ))}
    </Card.Content>
  </React.Fragment>
);

ProfileCardDefault.propTypes = {
  profile: PropTypes.shape({
    user: PropTypes.shape({
      profileImageUrl: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    }).isRequired,
    handle: PropTypes.string.isRequired,
    location: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string.isRequired),
  }).isRequired,
};

export default ProfileCardDefault;
