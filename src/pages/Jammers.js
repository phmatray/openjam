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
    const { profiles, loading, isAuthenticated, t } = this.props;

    if (profiles === null || loading) {
      return <Spinner />;
    }
    if (profiles.length === 0) {
      return <h4>{t('pages.jammers.no-profiles')}</h4>;
    }
    return <JammersPresenter jammers={profiles} isAuthenticated={isAuthenticated} />;
  }
}

Jammers.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profiles: PropTypes.any.isRequired,
  loading: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  profiles: state.profile.profiles,
  loading: state.profile.loading,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(
  mapStateToProps,
  { getProfiles },
)(withNamespaces('common')(Jammers));
