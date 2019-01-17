// @flow

import React from 'react';
import { Header, Label } from 'semantic-ui-react';

type Props = {
  genres: string[],
};

const Genres = ({ genres }: Props) => (
  <React.Fragment>
    <Header as="h3">Genres</Header>
    <div>
      {genres.map(_ => (
        <Label key={_} style={{ margin: '0px 4px 4px auto' }}>
          {_}
        </Label>
      ))}
    </div>
    <br />
  </React.Fragment>
);

export default Genres;
