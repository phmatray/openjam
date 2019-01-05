import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Segment, Grid, GridRow, GridColumn, Container } from 'semantic-ui-react';

import Spinner from '../components/Spinner';
import Message from '../components/Message';
import { getProfileByHandle, getProfile, getLoading } from '../redux/modules/profile';
import { getIsAuthenticated } from '../redux/modules/auth';

import ProfileHeader from './jammer/ProfileHeader';
import ProfileAbout from './jammer/ProfileAbout';

class Profile extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile.profile === null && this.props.profile.loading) {
      this.props.history.push('/not-found');
    }
  }

  render() {
    const { profile, loading, isAuthenticated } = this.props;

    let profileContent;

    if (profile === null || loading) {
      profileContent = <Spinner />;
    } else {
      profileContent = (
        <Container>
          <React.Fragment>
            <Grid style={{ paddingTop: '0em', marginTop: '-1.5rem' }}>
              <ProfileHeader profile={profile} />

              <GridRow style={{ paddingBottom: '0' }}>
                <GridColumn>{!isAuthenticated && <Message />}</GridColumn>
              </GridRow>

              <ProfileAbout profile={profile} />
            </Grid>
          </React.Fragment>
        </Container>
      );
    }

    return <Segment basic>{profileContent}</Segment>;
  }
}

Profile.propTypes = {
  getProfileByHandle: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  profile: getProfile(state),
  loading: getLoading(state),
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(
  mapStateToProps,
  { getProfileByHandle },
)(Profile);
