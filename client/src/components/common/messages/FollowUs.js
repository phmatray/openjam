import React from 'react';
import { Message } from 'semantic-ui-react';
import Social from '../Social';

const FollowUs = () => {
  return (
    <Message info>
      <Message.Header>Follow us</Message.Header>
      <p>You can support the project by sharing it on social networks.</p>

      <Social href="https://www.twitter.com/OpenJam_EU" />
      <Social href="https://www.facebook.com/OpenJamEU/" />
      <Social href="https://www.instagram.com/openjam.eu/" />
    </Message>
  );
};

export default FollowUs;
