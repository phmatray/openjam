// @flow

import React, { PureComponent } from 'react';
import { withNamespaces } from 'react-i18next';
import { connect } from 'react-redux';

import Spinner from 'views/components/Spinner';
import { fetchProfiles, getProfiles, getLoading } from 'store/modules/data/profile';
import { getIsAuthenticated } from 'store/modules/auth';

import Presenter from './Jammers.presenter';

type Props = {
  fetchProfiles: () => void,
  profiles: {}[],
  loading: boolean,
  isAuthenticated: boolean,
  t: any,
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
    return <Presenter jammers={profiles} isAuthenticated={isAuthenticated} />;
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
