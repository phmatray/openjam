import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../redux/modules/profile';

import { Segment, Header, Button, Icon } from 'semantic-ui-react';
import Spinner from '../common/Spinner';
import ProfileActions from './ProfileActions';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick = e => {
    this.props.deleteAccount();
  };

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div>
            <p>
              Welcome <Link to={`/profile/${profile.handle}`}>{user.firstname}</Link>
            </p>

            <ProfileActions />

            <div style={{ marginBottom: '3em' }} />
            <Button color="red" onClick={this.onDeleteClick}>
              <Icon name="user delete" />
              Delete my Account
            </Button>
          </div>
        );
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div>
            <p>Welcome {user.firstname}</p>
            <p>You have not yet setup a profile, please add some info</p>

            <Button as={Link} primary to="/create-profile">
              Create Profile
            </Button>
          </div>
        );
      }
    }

    return (
      <Segment basic>
        <Header as="h1">
          Dashboard
          <Header.Subheader>
            Configure your profile and what you listen to on OpenJam.
          </Header.Subheader>
        </Header>
        {dashboardContent}
      </Segment>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount },
)(Dashboard);
