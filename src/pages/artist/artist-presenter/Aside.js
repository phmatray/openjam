import React from 'react';
import PropTypes from 'prop-types';
import { Label, Header } from 'semantic-ui-react';

import Social from '../../../components/Social';

const getYears = years =>
  years
    .reverse()
    .map(_ => (_.from === _.to ? `${_.from}` : `${_.from}-${_.to}`))
    .join(', ');

const Aside = ({ artist }) => (
  <div>
    <Header as="h3">Genres</Header>
    <div>
      {artist.genres.map(_ => (
        <Label style={{ margin: '0px 4px 4px auto' }}>{_}</Label>
      ))}
    </div>
    <br />

    <Header as="h3">Socials</Header>
    <div>
      <Social href={artist.information.website} />
      {artist.socials.map(_ => (
        <Social href={_} />
      ))}
    </div>
    <br />

    <Header as="h3">Years active</Header>
    {getYears(artist.information.years)}
    <br />

    <Header as="h3">Label</Header>
    <div>
      {artist.information.labels.map(_ => (
        <Label tag style={{ margin: '0px 8px 4px 8px' }}>
          {_}
        </Label>
      ))}
    </div>
  </div>
);

Aside.propTypes = {
  artist: PropTypes.shape({
    genres: PropTypes.array,
    information: PropTypes.shape({
      website: PropTypes.string,
      years: PropTypes.arrayOf(
        PropTypes.shape({
          from: PropTypes.number,
          to: PropTypes.number,
        }),
      ),
      labels: PropTypes.array,
    }).isRequired,
    socials: PropTypes.array,
  }).isRequired,
};

export default Aside;
