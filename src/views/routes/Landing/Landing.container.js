// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getIsAuthenticated } from 'store/modules/auth';

import Presenter from './Landing.presenter';

type Props = {
  isAuthenticated: boolean,
  history: any,
};

class Landing extends PureComponent<Props> {
  componentDidMount() {
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      this.props.history.push('/explore');
    }
  }

  render() {
    return <Presenter />;
  }
}

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Landing);
