// @flow

import React, { PureComponent } from 'react';
import { withNamespaces } from 'react-i18next';
import { connect } from 'react-redux';

import Spinner from '../components/Spinner';
import { fetchProfiles, getProfiles, getLoading } from '../reducers/data/profile';
import { getIsAuthenticated } from '../reducers/auth';

import JammersPresenter from './jammers/JammersPresenter';

type Props = {
  fetchProfiles: () => void,
  profiles: {}[],
  loading: boolean,
  isAuthenticated: boolean,
};

class Jammers extends PureComponent<Props> {
  componentDidMount() {
    this.props.fetchProfiles();
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

const mapStateToProps = state => ({
  profiles: getProfiles(state),
  loading: getLoading(state),
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(
  mapStateToProps,
  { fetchProfiles },
)(withNamespaces('common')(Jammers));
