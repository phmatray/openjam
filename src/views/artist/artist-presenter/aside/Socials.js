// @flow

import React from 'react';
import { Header } from 'semantic-ui-react';

import Social from '../../../../components/Social';
import isEmpty from '../../../../lib/validation/is-empty';

type Props = {
  website: string,
  socials: string[],
};

const Socials = ({ website, socials }: Props) => (
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

export default Socials;
