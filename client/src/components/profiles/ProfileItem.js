import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from '../../validation/is-empty';
import { Card, Image, Label, Responsive } from 'semantic-ui-react';

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    const cardDefault = (
      <React.Fragment>
        <Link to={`/profile/${profile.handle}`}>
          <Image src={profile.user.avatar} size="medium" />
        </Link>
        <Card.Content>
          <Card.Header>
            <Link to={`/profile/${profile.handle}`}>
              {profile.user.firstname} {profile.user.lastname}
            </Link>
          </Card.Header>
          <Card.Meta>
            {isEmpty(profile.location) ? null : <span>{profile.location}</span>}
          </Card.Meta>
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

    const cardMobile = (
      <React.Fragment>
        <Card.Content>
          <Image floated="left" size="mini" src={profile.user.avatar} />
          <Card.Header>
            <Link to={`/profile/${profile.handle}`}>
              {profile.user.firstname} {profile.user.lastname}
            </Link>
          </Card.Header>
          <Card.Meta>
            {isEmpty(profile.location) ? null : <span>{profile.location}</span>}
          </Card.Meta>
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

    return (
      <React.Fragment>
        <Responsive as={Card} {...Responsive.onlyMobile}>
          {cardMobile}
        </Responsive>
        <Responsive as={Card} {...Responsive.onlyTablet}>
          {cardDefault}
        </Responsive>
        <Responsive as={Card} {...Responsive.onlyComputer}>
          {cardDefault}
        </Responsive>
      </React.Fragment>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
