// @flow

import React from 'react';
import { Header, Label } from 'semantic-ui-react';

type Props = {
  labels: string[],
};

const Labels = ({ labels }: Props) => (
  <React.Fragment>
    <Header as="h3">Labels</Header>
    <div>
      {labels.map(_ => (
        <Label key={_} tag style={{ margin: '0px 8px 4px 8px' }}>
          {_}
        </Label>
      ))}
    </div>
    <br />
  </React.Fragment>
);

export default Labels;
