import '../index.css';
import 'semantic-ui-css/semantic.min.css';
import 'rc-slider/assets/index.css';

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BrowserRouter as Router } from 'react-router-dom';

import Icon from './UI/Icon';
import Social from './UI/Social';
import JoinUs from './Messages/JoinUs';
import FollowUs from './Messages/FollowUs';
import Whitepaper from './Messages/Whitepaper';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

// Add fontAwesome Brand Icons
library.add(fab);

storiesOf('UI', module)
  .addDecorator(story => (
    <Router>
      <div style={{ margin: '1em' }}>{story()}</div>
    </Router>
  ))

  .add('icon', () => (
    <div style={{ display: 'flex' }}>
      <Icon name="youtube" />
      <Icon name="facebook" />
      <Icon name="twitter" />
      <Icon name="openjam" />
      <Icon name="soundcloud" />
      <Icon name="instagram" />
      <Icon name="linkedin" />
      <Icon name="github" />
      <Icon name="bandcamp" />
    </div>
  ))

  .add('social', () => (
    <div style={{ display: 'flex' }}>
      <Social href="https://www.facebook.com/OpenJamEU/" />
      <Social href="https://www.linkedin.com/company/openjam/" />
      <Social href="https://www.instagram.com/openjam.eu/" />
      <Social href="https://beta.openjam.eu/profile/philippe-matray" />
      <Social href="https://www.github.com/openjam-eu" />
      <Social href="https://www.twitter.com/OpenJam_EU" />
      <Social href="https://pandhora.bandcamp.com/" />
    </div>
  ));

storiesOf('Messages', module)
  .addDecorator(story => (
    <Router>
      <div style={{ margin: '1em' }}>{story()}</div>
    </Router>
  ))

  .add('join us', () => <JoinUs />)

  .add('follow us', () => <FollowUs />)

  .add('whitepaper', () => <Whitepaper />);
