import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { connect } from 'react-redux';

import JammersPresenter from './jammers/JammersPresenter';
import { getProfiles } from '../redux/modules/profile';
import Spinner from '../components/Spinner';

class Jammers extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }

  render() {
    const { t } = this.props;
    const { profiles, loading } = this.props.profile;
    const { isAuthenticated } = this.props.auth;

    return profiles === null || loading ? (
      <Spinner />
    ) : profiles.length > 0 ? (
      <JammersPresenter jammers={profiles} isAuthenticated={isAuthenticated} />
    ) : (
      <h4>{t('pages.jammers.no-profiles')}</h4>
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
)(withNamespaces('common')(Jammers));
