import React from 'react';
import { Message } from 'semantic-ui-react';
import Social from '../UI/Social';

const FollowUs = () => {
  return (
    <Message info>
      <Message.Header>Follow us</Message.Header>
      <p>You can support the project by sharing it on social networks.</p>
      <Social href="https://www.linkedin.com/company/openjam/" />
      <Social href="https://www.twitter.com/OpenJam_EU" />
      <Social href="https://www.instagram.com/openjam.eu/" />
      <Social href="https://www.facebook.com/OpenJamEU/" />
    </Message>
  );
};

export default FollowUs;
