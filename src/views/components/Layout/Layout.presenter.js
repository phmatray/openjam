// @flow

import * as React from 'react';
import { Responsive, Sidebar } from 'semantic-ui-react';

import Player from 'views/components/Player';
import NavbarDesktop from 'views/components/NavbarDesktop';
import NavbarMobile from 'views/components/NavbarMobile';
import NavbarSide from 'views/components/NavbarSide';
import type { UserBasic } from 'lib/types';

import Top from './styled/Top';
import Container from './styled/Container';
import Middle from './styled/Middle';
import Bottom from './styled/Bottom';

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
