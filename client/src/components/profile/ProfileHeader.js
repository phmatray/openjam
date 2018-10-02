import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Image, Button } from 'semantic-ui-react';
import isEmpty from '../../validation/is-empty';
import Social from '../../elements/UI/Social';
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

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ display: 'flex', margin: 'auto 0', padding: '5px' }}>
                {isEmpty(profile.website) ? null : <Social href={profile.website} />}

                {isEmpty(profile.social && profile.social.soundcloud) ? null : (
                  <Social href={profile.social.soundcloud} />
                )}

                {isEmpty(profile.social && profile.social.twitter) ? null : (
                  <Social href={profile.social.twitter} />
                )}

                {isEmpty(profile.social && profile.social.facebook) ? null : (
                  <Social href={profile.social.facebook} />
                )}

                {isEmpty(profile.social && profile.social.linkedin) ? null : (
                  <Social href={profile.social.linkedin} />
                )}

                {isEmpty(profile.social && profile.social.instagram) ? null : (
                  <Social href={profile.social.instagram} />
                )}

                {isEmpty(profile.social && profile.social.youtube) ? null : (
                  <Social href={profile.social.youtube} />
                )}
              </div>
            </div>
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
