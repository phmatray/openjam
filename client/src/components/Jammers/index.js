import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProfiles } from '../../redux/modules/profile';
import { Segment, Header, Card } from 'semantic-ui-react';
import ProfileItems from './presenter';
import JoinUs from '../common/messages/JoinUs';

class Jammers extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }

  render() {
    const { profiles, loading } = this.props.profile;
    const { isAuthenticated } = this.props.auth;

    return (
      <Segment basic>
        <Header as="h1">
          Jammers
          <Header.Subheader>Browse and connect with listeners and musicians</Header.Subheader>
        </Header>

        {!isAuthenticated && <JoinUs />}

        {profiles !== null && (
          <Card.Group itemsPerRow={4} stackable>
            <ProfileItems profiles={profiles} loading={loading} />
          </Card.Group>
        )}
      </Segment>
    );
  }
}

Jammers.propTypes = {
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
)(Jammers);
