import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Sidebar, Menu, Icon, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { logoutUser } from '../../../redux/modules/auth';
import { clearCurrentProfile } from '../../../redux/modules/profile';

class NavbarSide extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleLogoutClick = e => {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  };

  render() {
    const { auth, hideSidebar, visible, t } = this.props;
    const { activeItem } = this.state;
    const { isAuthenticated } = auth;

    const leftLinks = (
      <React.Fragment>
        <Menu.Item
          as={Link}
          to="/discover"
          name="discover"
          active={activeItem === 'discover'}
          onClick={this.handleItemClick && hideSidebar}
          style={{ textAlign: 'left' }}
        >
          <span>
            <Icon name="music" size="big" style={{ margin: '0.75em' }} />
            {t('components.navbar.discover')}
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
        <Menu.Item
          as={Link}
          to="/jammers"
          name="jammers"
          active={activeItem === 'jammers'}
          onClick={this.handleItemClick && hideSidebar}
          style={{ textAlign: 'left' }}
        >
          <span>
            <Icon name="users" size="big" style={{ margin: '0.75em' }} />
            {t('components.navbar.jammers')}
          </span>
        </Menu.Item>
      </React.Fragment>
    );

    const guestLinks = (
      <React.Fragment>
        <Menu.Item
          as={Link}
          to="/login"
          name="login"
          active={activeItem === 'login'}
          onClick={this.handleItemClick && hideSidebar}
          style={{ textAlign: 'left' }}
        >
          <span>
            <Icon name="sign-in" size="big" style={{ margin: '0.75em' }} />
            {t('components.navbar.sign-in')}
          </span>
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/register"
          name="register"
          active={activeItem === 'register'}
          onClick={this.handleItemClick && hideSidebar}
          style={{ textAlign: 'left' }}
        >
          <span>
            <Icon name="signup" size="big" style={{ margin: '0.75em' }} />
            {t('components.navbar.register')}
          </span>
        </Menu.Item>
      </React.Fragment>
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

NavbarSide.propTypes = {
  hideSidebar: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  logoutUser: PropTypes.func.isRequired,
  clearCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile },
)(withNamespaces('common')(NavbarSide));
