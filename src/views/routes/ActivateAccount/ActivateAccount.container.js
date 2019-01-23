// @flow

import React, { PureComponent } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';
import { withRouter } from 'react-router-dom';

import { activateAccount } from 'store/modules/auth';
import { getErrors } from 'store/modules/data/error';
import withTheme from 'views/hocs/withTheme';

import Presenter from './ActivateAccount.presenter';

type Props = {
  activateAccount: (token: string, history: any) => void,
  errors: {},
  location: any,
  history: any,
  theme: any,
  t: any,
};

type State = {
  token: string,
  errors: any,
};

class ActivateAccount extends PureComponent<Props, State> {
  state = {
    token: '',
  };

  componentDidMount() {
    const { location, history } = this.props;
    const { token } = queryString.parse(location.search);
    this.setState({ token }, () => this.props.activateAccount(token, history));
  }

  componentWillReceiveProps(nextProps) {
    const { location, history } = nextProps;
    const { token } = queryString.parse(location.search);

    // activate account
    if (token !== this.state.token)
      this.setState({ token }, () => this.props.activateAccount(token, history));

    // error handling
    if (nextProps.errors) {
      // eslint-disable-next-line react/no-unused-state
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const { theme, t, location, errors } = this.props;
    const { token } = queryString.parse(location.search);

    return <Presenter theme={theme} t={t} errors={errors} token={token} />;
  }
}

const mapStateToProps = state => ({
  errors: getErrors(state),
});

export default withRouter(
  withTheme(
    withNamespaces('common')(
      connect(
        mapStateToProps,
        { activateAccount },
      )(ActivateAccount),
    ),
  ),
);
