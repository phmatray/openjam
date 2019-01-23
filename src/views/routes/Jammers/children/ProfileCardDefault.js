// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image, Label } from 'semantic-ui-react';

import isEmpty from 'lib/validation/is-empty';

type Props = {
  profile: {
    profileImageUrl: string,
    firstName: string,
    lastName: string,
    handle: string,
    location?: string,
    skills: [string],
  },
};

const ProfileCardDefault = ({ profile }: Props) => (
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

export default ProfileCardDefault;
