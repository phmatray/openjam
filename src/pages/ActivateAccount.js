import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';
import { withRouter, Link } from 'react-router-dom';
import { Grid, Icon, Header, Button, Divider, Message } from 'semantic-ui-react';

import { activateAccount } from '../redux/modules/auth';

import BackgroundScreen from '../components/BackgroundScreen';

class ActivateAccount extends Component {
  state = {
    token: null,
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
      this.setState({ errors: nextProps.errors });
    }
  }

  getMessage(token, errors) {
    const { t } = this.props;

    if (errors && errors.message) {
      return <Message error header="Error" content={errors.message} />;
    }

    return token ? (
      <Message info style={{ overflowWrap: 'break-word' }}>
        <Message.Header>token</Message.Header>
        {token}
      </Message>
    ) : (
      <Message error>
        <Message.Header>{t('pages.activate-account.no-token.title')}</Message.Header>
        <p>{t('pages.activate-account.no-token.message')}</p>
      </Message>
    );
  }

  render() {
    const { t, location, errors } = this.props;
    const { token } = queryString.parse(location.search);

    return (
      <BackgroundScreen>
        <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 500 }}>
            <Header as="h1" icon inverted>
              <Icon name={(errors && errors.message) || !token ? 'lock' : 'unlock'} />
              {t('pages.activate-account.header')}
              <Header.Subheader>{t('pages.activate-account.subheader')}</Header.Subheader>
            </Header>
            <Divider />
            {this.getMessage(token, errors)}

            <Button as={Link} to="login" color="teal" fluid>
              {t('pages.activate-account.sign-in')}
            </Button>
          </Grid.Column>
        </Grid>
      </BackgroundScreen>
    );
  }
}

ActivateAccount.propTypes = {
  activateAccount: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  errors: state.errors,
});

export default withRouter(
  withNamespaces('common')(
    connect(
      mapStateToProps,
      { activateAccount },
    )(ActivateAccount),
  ),
);
