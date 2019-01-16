import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

import Spinner from '../../components/Spinner';

import ProfileActions from './ProfileActions';

class DashboardContent extends PureComponent {
  onDeleteClick = () => {
    this.props.deleteAccount();
  };

  render() {
    const {
      profile,
      user: { firstName },
      loading,
    } = this.props;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else if (Object.keys(profile).length > 0) {
      // Check if logged in user has profile data
      dashboardContent = (
        <div>
          <p>
            {'Welcome '}
            <Link to={`/jammer/${profile.handle}`}>{firstName}</Link>
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
          <p>{`Welcome ${user.firstName}`}</p>
          <p>You have not yet setup a profile, please add some info</p>

          <Button as={Link} primary to="/create-profile">
            Create Profile
          </Button>
        </div>
      );
    }

    return dashboardContent;
  }
}

DashboardContent.propTypes = {
  deleteAccount: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    handle: PropTypes.string,
  }).isRequired,
  user: PropTypes.shape({
    firstName: PropTypes.string,
  }).isRequired,
};

export default DashboardContent;
