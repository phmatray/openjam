import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Segment,
  Header,
  Button,
  Icon,
  Container,
  Tab,
  Card,
  Image,
  Divider,
} from 'semantic-ui-react';
import { getCurrentProfile, deleteAccount } from '../redux/modules/profile';

import Spinner from '../components/Spinner';
import ProfileActions from './dashboard/ProfileActions';
import Div from '../components/Div';

const panes = [
  {
    menuItem: 'Compte',
    render: props => (
      <Tab.Pane attached={false}>
        <Header as="h5" dividing sub>
          Adresse e-mail
        </Header>
        <Div mt="0.5em">
          <strong>{props.user.email}</strong>
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
              <Image floated="right" size="mini" src={props.user.profileImageUrl} />
              <Card.Header>{`${props.user.firstName} ${props.user.lastName}`}</Card.Header>
              <Card.Meta>
                <span className="date">
                  {`Joined `}
                  <Moment fromNow>{props.user.createdAt}</Moment>
                </span>
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <Icon name="user" />
              {`Role: ${props.user.roleName}`}
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
  // {
  //   menuItem: 'Contenu',
  //   render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
  // },
  // {
  //   menuItem: 'Confidentialité',
  //   render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
  // },
];

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick = () => {
    this.props.deleteAccount();
  };

  render() {
    const { user } = this.props.auth;
    const { email } = this.props.user;
    const { profile, loading } = this.props.profile;

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
              Configure your profile and what you listen to on OpenJam.
            </Header.Subheader>
          </Header>
          <Tab menu={{ secondary: true, pointing: true }} panes={panes} user={user} />
        </Div>
      </Container>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
  user: state.auth.user,
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount },
)(Dashboard);
