// @flow

import React from 'react';
import { Header } from 'semantic-ui-react';

import isEmpty from 'lib/validation/is-empty';
import SocialIcon from 'views/components/SocialIcon';

type Props = {
  website: string,
  socials: string[],
};

const Socials = ({ website, socials }: Props) => (
  <React.Fragment>
    <Header as="h3">Socials</Header>
    <div>
      {!isEmpty(website) && <SocialIcon href={website} />}
      {socials.map(_ => (
        <SocialIcon key={_} href={_} />
      ))}
    </div>
    <br />
  </React.Fragment>
);

export default Socials;
