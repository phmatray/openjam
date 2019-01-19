// @flow

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

import Spinner from '../../components/Spinner';
import type { UserBasic } from '../../types';

import ProfileActions from './ProfileActions';

type Props = {
  deleteAccount: () => void,
  profile: { handle: string },
  user: UserBasic,
  loading: boolean,
};

class DashboardContent extends PureComponent<Props> {
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
          <p>{`Welcome ${firstName}`}</p>
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

export default DashboardContent;
