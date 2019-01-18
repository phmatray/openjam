// @flow

import React, { Component } from 'react';
import { ThemeConsumer } from 'styled-components';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Menu, Icon, Image } from 'semantic-ui-react';

import logo from '../../../assets/images/logos/logo_white.svg';
import LanguageDropdown from '../../../containers/LanguageDropdown';
import type { UserBasic } from '../../../types';

type Props = {
  toggleSidebar: () => void,
  height: number,
  isAuthenticated: boolean,
  user: UserBasic,
  playing: boolean,
  t: any,
};

type State = {
  activeItem: 'home',
};

class NavbarMobile extends Component<Props, State> {
  state = { activeItem: 'home' };

  componentDidMount() {
    try {
      const activeItem = window.location.href.split(['/'])[3];
      this.setState({ activeItem });
    } catch (error) {
      this.setState({ activeItem: 'home' });
    }
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { height, playing, toggleSidebar, isAuthenticated, user, t } = this.props;
    const { activeItem } = this.state;

    const authLinks = (
      <React.Fragment>
        <Menu.Item
          as={Link}
          to="/dashboard"
          name="dashboard"
          active={activeItem === 'dashboard'}
          onClick={this.handleItemClick}
        >
          <Image
            src={user.profileImageUrl}
            alt={`${user.firstName} ${user.lastName}`}
            circular
            size="mini"
            title="You must have a Gravatar connected to your email to display an image."
          />
        </Menu.Item>
      </React.Fragment>
    );

    return (
      <ThemeConsumer>
        {theme => (
          <Menu inverted fixed="top" style={{ height: `${height}px`, backgroundColor: 'black' }}>
            <Menu.Item
              header
              as={Link}
              to="/"
              name={isAuthenticated ? 'explore' : 'landing'}
              active
              onClick={this.handleItemClick}
              color={theme.primarySemantic}
              style={{ width: '11em' }}
            >
              <img
                src={logo}
                style={
                  playing
                    ? {
                        margin: '0.5em 0.5em 0.5em 0',
                        animationName: 'spin',
                        animationDuration: '5000ms',
                        animationIterationCount: 'infinite',
                        animationTimingFunction: 'linear',
                      }
                    : { margin: '0.5em 0.5em 0.5em 0' }
                }
                alt="logo"
              />
              {t('app')}
            </Menu.Item>
            <LanguageDropdown />

            <Menu.Menu position="right">
              {isAuthenticated && authLinks}
              <Menu.Item onClick={toggleSidebar}>
                <Icon name="sidebar" />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        )}
      </ThemeConsumer>
    );
  }
}

export default withNamespaces('common')(NavbarMobile);
