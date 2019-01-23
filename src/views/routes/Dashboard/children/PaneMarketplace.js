// @flow

import React from 'react';
import { Header, Button, Tab } from 'semantic-ui-react';

import { Div } from 'views/elements';

type Props = {
  loading: boolean,
};

const PaneMarketplace = ({ loading }: Props) => (
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

export default PaneMarketplace;
