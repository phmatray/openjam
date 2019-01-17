// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Header, Container, Tab } from 'semantic-ui-react';

import Div from '../components/Div';
import { deleteAccount } from '../reducers/data/profile';
import { fetchMe, getUser, getLoading } from '../reducers/ui/views/dashboard';

import PaneAccount from './dashboard/PaneAccount';
import PaneProfile from './dashboard/PaneProfile';
import PaneMarketplace from './dashboard/PaneMarketplace';

type Props = {
  fetchMe: () => void,
  user: {
    email: string,
    firstName: string,
    lastName: string,
    profileImageUrl: string,
    createdAt: string,
    roleName: string,
  },
  loading?: boolean,
};

const panes = [
  {
    menuItem: { key: 'account', icon: 'lock', content: 'Compte' },
    render: PaneAccount,
  },
  {
    menuItem: { key: 'profile', icon: 'users', content: 'Profil' },
    render: PaneProfile,
  },
  {
    menuItem: { key: 'marketplace', icon: 'shop', content: 'Marketplace' },
    render: PaneMarketplace,
  },
];

class Dashboard extends PureComponent<Props> {
  componentDidMount() {
    this.props.fetchMe();
  }

  getActiveIndex = () => {
    const { tabKey } = this.props.match.params;

    const tabIndex = panes.findIndex(el => el.tabKey === tabKey);
    const activeIndex = tabIndex === -1 ? 0 : tabIndex;

    return activeIndex;
  };

  handleChange = (e, data) => {
    const { key } = panes[data.activeIndex].menuItem;
    this.props.history.push(`/dashboard/${key}`);
  };

  render() {
    const { user, loading } = this.props;

    return (
      <Container>
        <Div mt="2em">
          <Header as="h1">
            Dashboard
            <Header.Subheader>
              {`Configure your profile and what you listen to on ${process.env.REACT_APP_NAME}.`}
            </Header.Subheader>
          </Header>
          <Tab
            menu={{ secondary: true, pointing: true }}
            panes={panes}
            user={user}
            loading={loading}
            defaultActiveIndex={this.getActiveIndex()}
            onTabChange={this.handleChange}
          />
        </Div>
      </Container>
    );
  }
}

Dashboard.defaultProps = {
  loading: false,
};

const mapStateToProps = state => ({
  user: getUser(state),
  loading: getLoading(state),
});

export default connect(
  mapStateToProps,
  { deleteAccount, fetchMe },
)(Dashboard);
