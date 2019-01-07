import React from 'react';
import PropTypes from 'prop-types';
import { Header, Button, Tab } from 'semantic-ui-react';

import Div from '../../components/Div';

const PaneMarketplace = ({ loading }) => (
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
);

PaneMarketplace.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default PaneMarketplace;
