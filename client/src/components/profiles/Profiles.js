import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import { getProfiles } from '../../redux/modules/profile';
import { Segment, Header, Card } from 'semantic-ui-react';
import ProfileItem from './ProfileItem';
import JoinUs from '../common/messages/JoinUs';

class Profiles extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }

  render() {
    const { profiles, loading } = this.props.profile;
    const { isAuthenticated } = this.props.auth;

    let profileItems;
    if (profiles === null || loading) {
      profileItems = <Spinner />;
    } else {
      if (profiles.length > 0) {
        profileItems = profiles.map(profile => <ProfileItem key={profile._id} profile={profile} />);
      } else {
        profileItems = <h4>No profiles found...</h4>;
      }
    }

    return (
      <Segment basic>
        <Header as="h1">
          Jammers
          <Header.Subheader>Browse and connect with listeners and musicians</Header.Subheader>
        </Header>

        {!isAuthenticated && <JoinUs />}

        <Card.Group itemsPerRow={4} stackable>
          {profileItems}
        </Card.Group>
      </Segment>
    );
  }
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { getProfiles },
)(Profiles);
