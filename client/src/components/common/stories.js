import '../../index.css';
import 'semantic-ui-css/semantic.min.css';
import 'rc-slider/assets/index.css';
import '../../App.css';

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BrowserRouter as Router } from 'react-router-dom';

import Social from './Social';
import JoinUs from './messages/JoinUs';
import FollowUs from './messages/FollowUs';

storiesOf('Common', module)
  .addDecorator(story => (
    <Router>
      <div style={{ margin: '1em' }}>{story()}</div>
    </Router>
  ))

  .add('social', () => (
    <React.Fragment>
      <Social href="https://www.facebook.com/OpenJamEU/" />
      <Social href="https://www.linkedin.com/company/openjam/" />
      <Social href="https://www.instagram.com/openjam.eu/" />
      <Social href="https://www.github.com/openjam-eu" />
      <Social href="https://www.twitter.com/OpenJam_EU" />
      <Social href="https://www.openjam.eu" />
    </React.Fragment>
  ));

storiesOf('Messages', module)
  .addDecorator(story => (
    <Router>
      <div style={{ margin: '1em' }}>{story()}</div>
    </Router>
  ))

  .add('join us', () => <JoinUs />)

  .add('follow us', () => <FollowUs />);
