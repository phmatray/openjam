import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

import Social from '../../../../components/Social';
import isEmpty from '../../../../utils/validation/is-empty';

const Socials = ({ website, socials }) => (
  <React.Fragment>
    <Header as="h3">Socials</Header>
    <div>
      {!isEmpty(website) && <Social href={website} />}
      {socials.map(_ => (
        <Social key={_} href={_} />
      ))}
    </div>
    <br />
  </React.Fragment>
);

Socials.propTypes = {
  website: PropTypes.string.isRequired,
  socials: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Socials;
