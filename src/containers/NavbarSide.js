// @flow

import React, { Component } from 'react';
import { ThemeConsumer } from 'styled-components';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Sidebar, Menu, Icon, Divider, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { logoutUser, getIsAuthenticated } from '../reducers/auth';
import { actions as profileActions } from '../reducers/data/profile';

type Props = {
  hideSidebar: () => void,
  visible: boolean,
  logoutUser: () => void,
  clearCurrentProfile: () => void,
  isAuthenticated: boolean,
  t: any,
};

type State = {
  activeItem: 'home',
};

class NavbarSide extends Component<Props, State> {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleLogoutClick = e => {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  };

  render() {
    const { isAuthenticated, hideSidebar, visible, t } = this.props;
    const { activeItem } = this.state;

    const leftLinks = (
      <React.Fragment>
        <Menu.Item
          as={Link}
          to="/explore"
          name="explore"
          active={activeItem === 'explore'}
          onClick={this.handleItemClick && hideSidebar}
          style={{ textAlign: 'left' }}
        >
          <span>
            <Icon name="music" size="big" style={{ margin: '0.75em' }} />
            {t('components.navbar.explore')}
          </span>
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/share"
          name="share"
          active={activeItem === 'share'}
          onClick={this.handleItemClick && hideSidebar}
          style={{ textAlign: 'left' }}
        >
          <span>
            <Icon name="globe" size="big" style={{ margin: '0.75em' }} />
            {t('components.navbar.share')}
          </span>
        </Menu.Item>
      </React.Fragment>
    );

    const guestLinks = (
      <ThemeConsumer>
        {theme => (
          <Menu.Item
            as={Link}
            to="/login"
            name="login"
            onClick={this.handleItemClick && hideSidebar}
          >
            <Button fluid size="big" color={theme.primarySemantic}>
              {t('components.navbar.sign-in')}
            </Button>
          </Menu.Item>
        )}
      </ThemeConsumer>
    );

    const authLinks = (
      <React.Fragment>
        <Menu.Item onClick={this.handleLogoutClick} style={{ textAlign: 'left' }}>
          <span>
            <Icon name="sign-out" size="big" style={{ margin: '0.75em' }} />
            {t('components.navbar.logout')}
          </span>
        </Menu.Item>
      </React.Fragment>
    );

    return (
      <Sidebar
        as={Menu}
        animation="push"
        icon="labeled"
        inverted
        onHide={hideSidebar}
        vertical
        visible={visible}
        direction="right"
        style={{ backgroundColor: 'black', maxHeight: '100%', width: 'calc(100% - 11em)' }}
      >
        <Divider horizontal inverted>
          {t('components.navbar.browse')}
        </Divider>
        {leftLinks}
        <Divider horizontal inverted>
          {t('components.navbar.account')}
        </Divider>
        {isAuthenticated ? authLinks : guestLinks}
      </Sidebar>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile: profileActions.clearCurrentProfile },
)(withNamespaces('common')(NavbarSide));
