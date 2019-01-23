// @flow

import React from 'react';
import { Message } from 'semantic-ui-react';

import SocialIcon from 'views/components/SocialIcon';

const FollowUs = () => (
  <Message info>
    <Message.Header>Follow us</Message.Header>
    <p>You can support the project by sharing it on social networks.</p>
    <SocialIcon href="https://www.linkedin.com/company/openjam/" />
    <SocialIcon href="https://www.twitter.com/OpenJam_EU" />
    <SocialIcon href="https://www.instagram.com/openjam.eu/" />
    <SocialIcon href="https://www.facebook.com/OpenJamEU/" />
  </Message>
);

export default FollowUs;
