import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavbarDesktop from './navbar/NavbarDesktop';
import NavbarMobile from './navbar/NavbarMobile';
import NavbarSide from './navbar/NavbarSide';
import Player from '../player/Player';
import { Responsive, Sidebar, Segment, Container } from 'semantic-ui-react';
import background from '../../img/backgrounds/background.jpg';

class Layout extends Component {
  state = { visible: false };

  handleSidebarToggle = () => this.setState({ visible: !this.state.visible });

  handleSidebarHide = () => this.setState({ visible: false });

  render() {
    const { visible } = this.state;
    const { children } = this.props;

    const topbarHeight = '4em';
    const playerHeight = '8em';

    return (
      <div
        style={{
          position: 'fixed',
          top: topbarHeight,
          height: `calc(100% - (${topbarHeight} + ${playerHeight})`,
          backgroundImage: `url(${background})`,
        }}
      >
        <Responsive>
          <NavbarMobile toggleSidebar={this.handleSidebarToggle} height={topbarHeight} />
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavbarDesktop toggleSidebar={this.handleSidebarToggle} height={topbarHeight} />
        </Responsive>

        <Sidebar.Pushable as="div" style={{ transform: 'none' }}>
          <NavbarSide visible={visible} hideSidebar={this.handleSidebarHide} />
          <Sidebar.Pusher
            style={{
              width: '100vw',
              transform: visible && 'translate3d(calc(-100% + 11em), 0, 0)',
            }}
          >
            <Segment basic>
              <Container>
                <Segment
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.98)',
                    padding: '1em 0.5em',
                    border: '0',
                  }}
                >
                  {children}
                </Segment>
              </Container>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>

        <Player height={playerHeight} />
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Layout;
