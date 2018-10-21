import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Menu, Icon, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import logo from '../../../img/logos/logo_white.svg';

class NavbarMobile extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { auth, playing, toggleSidebar, height } = this.props;
    const { activeItem } = this.state;
    const { isAuthenticated, user } = auth;

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
            src={user.avatar}
            alt={`${user.firstname} ${user.lastname}`}
            circular
            size="mini"
            title="You must have a Gravatar connected to your email to display an image."
          />
        </Menu.Item>
      </React.Fragment>
    );

    return (
      <Menu inverted fixed="top" style={{ height: height, backgroundColor: 'black' }}>
        <Menu.Item
          header
          as={Link}
          to="/"
          name="share"
          active={true}
          onClick={this.handleItemClick}
          color="teal"
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
          OpenJam
        </Menu.Item>

        <Menu.Menu position="right">
          {isAuthenticated && authLinks}
          <Menu.Item onClick={toggleSidebar}>
            <Icon name="sidebar" />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

NavbarMobile.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  height: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired,
  playing: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  playing: state.player.playing,
});

export default connect(mapStateToProps)(NavbarMobile);
