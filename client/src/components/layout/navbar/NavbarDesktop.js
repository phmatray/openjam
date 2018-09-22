import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Menu, Container, Image, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { logoutUser } from '../../../redux/modules/auth';
import { clearCurrentProfile } from '../../../redux/modules/profile';
import logo from '../../../img/logos/logo_white.svg';

class NavbarDesktop extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleLogoutClick = e => {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  };

  render() {
    const { auth, height } = this.props;
    const { activeItem } = this.state;
    const { isAuthenticated, user } = auth;

    const leftLinks = (
      <React.Fragment>
        <Menu.Item>
          <Dropdown item text="Discover">
            <Dropdown.Menu>
              <Dropdown.Item
                as={Link}
                to="/tracks"
                name="tracks"
                active={activeItem === 'tracks'}
                onClick={this.handleItemClick}
              >
                Tracks
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to="/albums"
                name="albums"
                active={activeItem === 'albums'}
                onClick={this.handleItemClick}
              >
                Albums
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to="/artists"
                name="artists"
                active={activeItem === 'artists'}
                onClick={this.handleItemClick}
              >
                Artists
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to="/labels"
                name="labels"
                active={activeItem === 'labels'}
                onClick={this.handleItemClick}
              >
                Labels
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/share"
          name="share"
          active={activeItem === 'share'}
          onClick={this.handleItemClick}
        >
          Share
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/jammers"
          name="jammers"
          active={activeItem === 'jammers'}
          onClick={this.handleItemClick}
        >
          Jammers
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
          onClick={this.handleItemClick}
        >
          Login
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/register"
          name="register"
          active={activeItem === 'register'}
          onClick={this.handleItemClick}
        >
          Register
        </Menu.Item>
      </React.Fragment>
    );

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
            alt={`{user.firsname} {user.lastname}`}
            circular
            size="mini"
            title="You must have a Gravatar connected to your email to display an image."
          />
          <span style={{ marginLeft: '0.5em' }}>{user.firstname}</span>
        </Menu.Item>
        <Menu.Item onClick={this.handleLogoutClick}>Logout</Menu.Item>
      </React.Fragment>
    );

    return (
      <Menu
        inverted
        fixed="top"
        style={{
          height: height,
          backgroundColor: 'black',
        }}
      >
        <Container>
          <Menu.Item
            header
            as={Link}
            to="/"
            name="share"
            active={true}
            onClick={this.handleItemClick}
            color="teal"
          >
            <img src={logo} style={{ margin: '0.5em 0.5em 0.5em 0' }} alt="logo" />
            OpenJam
          </Menu.Item>

          {leftLinks}

          <Menu.Menu position="right">{isAuthenticated ? authLinks : guestLinks}</Menu.Menu>
        </Container>
      </Menu>
    );
  }
}

NavbarDesktop.propTypes = {
  height: PropTypes.string.isRequired,
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
)(NavbarDesktop);
