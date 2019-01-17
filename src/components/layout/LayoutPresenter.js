// @flow

import * as React from 'react';
import { Responsive, Sidebar } from 'semantic-ui-react';

import Player from '../Player';
import type { UserBasic } from '../../lib/types/common';

import NavbarDesktop from './layout-presenter/NavbarDesktop';
import NavbarMobile from './layout-presenter/NavbarMobile';
import NavbarSide from './layout-presenter/NavbarSide';
import Top from './layout-presenter/Top';
import Container from './layout-presenter/Container';
import Middle from './layout-presenter/Middle';
import Bottom from './layout-presenter/Bottom';

type Props = {
  sidebarVisible: boolean,
  playing: boolean,
  isAuthenticated: boolean,
  user: UserBasic,
  children: React.Node,
  hideSidebar: () => void,
  toggleSidebar: () => void,
};

const LayoutPresenter = ({
  sidebarVisible,
  playing,
  isAuthenticated,
  user,
  children,
  hideSidebar,
  toggleSidebar,
}: Props) => {
  const topbarHeight = 56;
  const playerHeight = 90;
  const containerHeight = `calc(100vh - ${topbarHeight}px - ${playerHeight}px)`;

  return (
    <div>
      <Top>
        <Responsive>
          <NavbarMobile
            height={topbarHeight}
            playing={playing}
            toggleSidebar={toggleSidebar}
            isAuthenticated={isAuthenticated}
            user={user}
          />
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavbarDesktop height={topbarHeight} />
        </Responsive>
      </Top>

      <Sidebar.Pushable as={Container} style={{ height: containerHeight }}>
        <NavbarSide visible={sidebarVisible} hideSidebar={hideSidebar} />

        <Sidebar.Pusher
          as={Container}
          style={{
            width: '100vw',
            height: containerHeight,
            transform: sidebarVisible && 'translate3d(calc(-100% + 11em), 0, 0)',
          }}
        >
          {/* <Left height={containerHeight} /> */}
          <Middle height={containerHeight}>{children}</Middle>
          {/* <Right height={containerHeight} /> */}
        </Sidebar.Pusher>
      </Sidebar.Pushable>

      <Bottom>
        <Player height={playerHeight} />
      </Bottom>
    </div>
  );
};

export default LayoutPresenter;
