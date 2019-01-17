// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getIsAuthenticated } from '../reducers/auth';

import LandingPresenter from './landing/LandingPresenter';

type Props = {
  isAuthenticated: boolean,
};

class Landing extends PureComponent<Props> {
  componentDidMount() {
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      this.props.history.push('/explore');
    }
  }

  render() {
    return <LandingPresenter />;
  }
}

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Landing);
