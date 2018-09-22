import React, { Component } from 'react';
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
    const { auth, hideSidebar, visible } = this.props;
    const { activeItem } = this.state;
    const { isAuthenticated } = auth;

    const leftLinks = (
      <React.Fragment>
        <Menu.Item
          as={Link}
          to="/tracks"
          name="tracks"
          active={activeItem === 'tracks'}
          onClick={this.handleItemClick && hideSidebar}
          style={{ textAlign: 'left' }}
        >
          <span>
            <Icon name="music" size="big" style={{ margin: '0.75em' }} />
            Tracks
          </span>
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/artists"
          name="artists"
          active={activeItem === 'artists'}
          onClick={this.handleItemClick && hideSidebar}
          style={{ textAlign: 'left' }}
        >
          <span>
            <Icon name="music" size="big" style={{ margin: '0.75em' }} />
            Artists
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
            Share
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
            Jammers
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
            Log In
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
            Register
          </span>
        </Menu.Item>
      </React.Fragment>
    );

    const authLinks = (
      <React.Fragment>
        <Menu.Item onClick={this.handleLogoutClick} style={{ textAlign: 'left' }}>
          <span>
            <Icon name="sign-out" size="big" style={{ margin: '0.75em' }} />
            Log Out
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
          Browse
        </Divider>
        {leftLinks}
        <Divider horizontal inverted>
          Acount
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
)(NavbarSide);
