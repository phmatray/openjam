// @flow

import React from 'react';
import { Header, Label, Segment, GridRow, GridColumn } from 'semantic-ui-react';

import isEmpty from 'lib/validation/is-empty';
import type { UserBasic } from 'lib/types';

type Props = {
  profile: {
    user: UserBasic,
    skills: string[],
    bio: string,
  },
};

const ProfileAbout = ({ profile }: Props) => {
  // Skill list
  const skills = profile.skills.slice(0, 4).map((skill, index) => (
    <Label basic key={index}>
      {skill}
    </Label>
  ));

  return (
    <GridRow>
      <GridColumn>
        <Segment.Group>
          <Segment>
            <Header as="h3">{`${profile.user.firstName}'s Bio`}</Header>
            <p>
              {isEmpty(profile.bio) ? (
                <span>{`${profile.user.firstName} does not have a bio`}</span>
              ) : (
                <span>{profile.bio}</span>
              )}
            </p>
          </Segment>
          <Segment>
            <Header as="h3">Skill Set</Header>
            {skills}
          </Segment>
        </Segment.Group>
      </GridColumn>
    </GridRow>
  );
};

export default ProfileAbout;
