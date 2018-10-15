import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProfiles } from '../../../redux/modules/profile';
import Spinner from '../../../elements/UI/Spinner';
import JammersPresenter from './presenter';

class Jammers extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }

  render() {
    const { profiles, loading } = this.props.profile;
    const { isAuthenticated } = this.props.auth;

    return profiles === null || loading ? (
      <Spinner />
    ) : profiles.length > 0 ? (
      <JammersPresenter jammers={profiles} isAuthenticated={isAuthenticated} />
    ) : (
      <h4>No profiles found...</h4>
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
