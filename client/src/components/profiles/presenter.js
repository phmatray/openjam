import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import ProfileItem from './children/ProfileItem';

const ProfileItems = ({ profiles, loading }) =>
  profiles === null || loading ? (
    <Spinner />
  ) : profiles.length > 0 ? (
    profiles.map(profile => <ProfileItem key={profile._id} profile={profile} />)
  ) : (
    <h4>No profiles found...</h4>
  );

ProfileItems.propTypes = {
  profiles: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default ProfileItems;
