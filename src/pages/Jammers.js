import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { connect } from 'react-redux';

import Spinner from '../components/Spinner';
import { getProfiles, getProfilesState, getLoading } from '../redux/modules/profile';
import { getIsAuthenticated } from '../redux/modules/auth';

import JammersPresenter from './jammers/JammersPresenter';

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
  profiles: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  profiles: getProfilesState(state),
  loading: getLoading(state),
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(
  mapStateToProps,
  { getProfiles },
)(withNamespaces('common')(Jammers));
