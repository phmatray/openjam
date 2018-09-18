import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Image, Button } from 'semantic-ui-react';
import isEmpty from '../../validation/is-empty';
import Social from '../common/Social';
import PropTypes from 'prop-types';

class ProfileGithub extends Component {
  render() {
    const { profile } = this.props;

    return (
      <React.Fragment>
        <Grid.Row>
          <Grid.Column
            width={16}
            color="blue"
            style={{ borderRadius: '.28571429rem .28571429rem 0 0' }}
          >
            <Button as={Link} to="/jammers" floated="left">
              Back to Profiles
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row textAlign="center">
          <Grid.Column width={16} color="blue">
            <Image src={profile.user.avatar} circular centered />
            <h1>
              {profile.user.firstname} {profile.user.lastname}
            </h1>
            <p>
              {profile.status} {isEmpty(profile.company) ? null : <span>at {profile.company}</span>}
            </p>
            {isEmpty(profile.location) ? null : <p>{profile.location}</p>}
            <p>
              {isEmpty(profile.website) ? null : <Social href={profile.website} icon="globe" />}

              {isEmpty(profile.social && profile.social.soundcloud) ? null : (
                <Social href={profile.social.soundcloud} icon="soundcloud" />
              )}

              {isEmpty(profile.social && profile.social.twitter) ? null : (
                <Social href={profile.social.twitter} icon="twitter" />
              )}

              {isEmpty(profile.social && profile.social.facebook) ? null : (
                <Social href={profile.social.facebook} icon="facebook" />
              )}

              {isEmpty(profile.social && profile.social.linkedin) ? null : (
                <Social href={profile.social.linkedin} icon="linkedin" />
              )}

              {isEmpty(profile.social && profile.social.instagram) ? null : (
                <Social href={profile.social.instagram} icon="instagram" />
              )}

              {isEmpty(profile.social && profile.social.youtube) ? null : (
                <Social href={profile.social.youtube} icon="youtube" />
              )}
            </p>
          </Grid.Column>
        </Grid.Row>
      </React.Fragment>
    );
  }
}

ProfileGithub.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileGithub;
