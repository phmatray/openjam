// @flow

import React from 'react';
import Moment from 'react-moment';
import { Header, Button, Icon, Tab, Card, Image, Divider } from 'semantic-ui-react';

import Div from '../../components/Div';

type Props = {
  loading: boolean,
  user: {
    email: string,
    firstName: string,
    lastName: string,
    profileImageUrl: string,
    createdAt: string,
    roleName: string,
  },
};

const PaneAccount = ({
  loading,
  user: { email, firstName, lastName, profileImageUrl, createdAt, roleName },
}: Props) => (
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
);

export default PaneAccount;
