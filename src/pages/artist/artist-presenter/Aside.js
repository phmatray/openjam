import React from 'react';
import PropTypes from 'prop-types';

import isEmpty from '../../../utils/validation/is-empty';

import Genres from './aside/Genres';
import Socials from './aside/Socials';
import YearsActive from './aside/YearsActive';
import Labels from './aside/Labels';

const Aside = ({ artist }) => {
  const {
    genres,
    information: { website, socials, labels, years },
  } = artist;

  return (
    <div>
      {!isEmpty(genres) && <Genres genres={genres} />}
      {!isEmpty(socials) && <Socials {...{ website, socials }} />}
      {!isEmpty(years) && <YearsActive years={years} />}
      {!isEmpty(labels) && <Labels labels={labels} />}
    </div>
  );
};

Aside.propTypes = {
  artist: PropTypes.shape({
    genres: PropTypes.array,
    information: PropTypes.shape({
      website: PropTypes.string,
      years: PropTypes.arrayOf(
        PropTypes.shape({
          from: PropTypes.string,
          to: PropTypes.string,
        }),
      ),
      labels: PropTypes.array,
    }).isRequired,
    socials: PropTypes.array,
  }).isRequired,
};

export default Aside;
