import React from 'react';
import PropTypes from 'prop-types';
import { Header, Button, Tab } from 'semantic-ui-react';

import Div from '../../components/Div';

const PaneProfile = ({ loading, user: { profiles, artists } }) => (
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
);

PaneProfile.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    profiles: PropTypes.array.isRequired,
    artists: PropTypes.array.isRequired,
  }).isRequired,
};

export default PaneProfile;
