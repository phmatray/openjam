import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Header, Button, Icon, Container, Tab, Card, Image, Divider } from 'semantic-ui-react';

import Spinner from '../components/Spinner';
import Div from '../components/Div';
import { deleteAccount, getProfile } from '../redux/modules/profile';
import { getMe, getDashboardUser, getLoading } from '../redux/modules/page-dashboard';

import ProfileActions from './dashboard/ProfileActions';

const panes = [
  {
    menuItem: 'Compte',
    render: ({
      loading,
      user: { email, firstName, lastName, profileImageUrl, createdAt, roleName },
    }) => (
      <Tab.Pane attached={false} loading={loading}>
        <Header as="h5" dividing sub>
          Adresse e-mail
        </Header>
        <Div mt="0.5em">
          <strong>{email}</strong>
        </Div>
        <Header as="h5" dividing sub>
          Se connecter avec d'autres réseaux sociaux - (Soon)
        </Header>
        <Div mt="0.5em">
          <Button color="facebook" compact disabled>
            <Icon name="facebook" />
            Ajouter un compte Facebook
          </Button>
          <Button color="google plus" compact disabled>
            <Icon name="google" />
            Ajouter un compte Google
          </Button>
          <Button color="black" compact disabled>
            <Icon name="github" />
            Ajouter un compte GitHub
          </Button>
        </Div>
        <Header as="h5" dividing sub>
          Mot de passe
        </Header>
        <Div mt="0.5em">
          <Button compact disabled>
            Envoyer un lien de réinitialisation de mot de passe
          </Button>
        </Div>
        <Header as="h5" dividing sub>
          Information de base
        </Header>
        <Div mt="1em" mb="3em">
          <Card>
            <Card.Content>
              <Image floated="right" size="mini" src={profileImageUrl} />
              <Card.Header>{`${firstName} ${lastName}`}</Card.Header>
              <Card.Meta>
                <span className="date">
                  {`Joined `}
                  <Moment fromNow>{createdAt}</Moment>
                </span>
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <Icon name="user" />
              {`Role: ${roleName}`}
            </Card.Content>
          </Card>
        </Div>
        <Divider />
        <Button compact size="tiny" color="red" disabled inverted>
          Supprimer le compte
        </Button>
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Profil',
    render: ({ loading, user: { profiles, artists } }) => (
      <Tab.Pane attached={false} loading={loading}>
        <Header as="h5" dividing sub>
          Profil public
        </Header>
        <Div mt="0.5em">
          {profiles && profiles.length === 0 && (
            <div>
              {"Vous n'avez pas de profil"}
              <br />
              <Button compact disabled>
                Create a profile
              </Button>
            </div>
          )}
        </Div>
        <Header as="h5" dividing sub>
          Profil artiste
        </Header>
        <Div mt="0.5em">
          {artists && artists.length === 0 && (
            <div>
              {"Etes-vous un artiste ou faites-vous partie d'un collectif d'artistes ?"}
              <br />
              <Button compact disabled>
                Create a new artist profile
              </Button>
              <Button compact disabled>
                Join an existing artist profile
              </Button>
            </div>
          )}
        </Div>
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Marketplace',
    render: ({ loading }) => (
      <Tab.Pane attached={false} loading={loading}>
        <Header as="h5" dividing sub>
          Services
        </Header>
        <Div mt="0.5em">
          {'Vous ne proposez actuellement pas de service'}
          <br />
          <Button compact disabled>
            Add a service
          </Button>
        </Div>
        <Header as="h5" dividing sub>
          Articles
        </Header>
        <Div mt="0.5em">
          {"Vous ne vendez actuellement pas d'article"}
          <br />
          <Button compact disabled>
            Add a article
          </Button>
        </Div>
      </Tab.Pane>
    ),
  },
];

class Dashboard extends Component {
  componentDidMount() {
    this.props.getMe();
  }

  onDeleteClick = () => {
    this.props.deleteAccount();
  };

  render() {
    const { profile, user, loading } = this.props;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else if (Object.keys(profile).length > 0) {
      // Check if logged in user has profile data
      dashboardContent = (
        <div>
          <p>
            {'Welcome '}
            <Link to={`/jammer/${profile.handle}`}>{user.firstName}</Link>
          </p>

          <ProfileActions />

          <div style={{ marginBottom: '3em' }} />
          <Button color="red" onClick={this.onDeleteClick}>
            <Icon name="user delete" />
            Delete my Account
          </Button>
        </div>
      );
    } else {
      // User is logged in but has no profile
      dashboardContent = (
        <div>
          <p>{`Welcome ${user.firstName}`}</p>
          <p>You have not yet setup a profile, please add some info</p>

          <Button as={Link} primary to="/create-profile">
            Create Profile
          </Button>
        </div>
      );
    }

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
          />
        </Div>
      </Container>
    );
  }
}

Dashboard.propTypes = {
  deleteAccount: PropTypes.func.isRequired,
  getMe: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    handle: PropTypes.string,
  }).isRequired,
  loading: PropTypes.bool,

  user: PropTypes.shape({
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    profileImageUrl: PropTypes.string,
    createdAt: PropTypes.string,
    roleName: PropTypes.string,
  }).isRequired,
};

Dashboard.defaultProps = {
  loading: false,
};

const mapStateToProps = state => ({
  profile: getProfile(state),
  user: getDashboardUser(state),
  loading: getLoading(state),
});

export default connect(
  mapStateToProps,
  { deleteAccount, getMe },
)(Dashboard);
