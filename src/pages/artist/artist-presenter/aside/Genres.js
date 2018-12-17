import React from 'react';
import PropTypes from 'prop-types';
import { Header, Label } from 'semantic-ui-react';

const Genres = ({ genres }) => (
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

Genres.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Genres;
