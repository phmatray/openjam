import '../../../index.css';
import 'semantic-ui-css/semantic.min.css';

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';

import ProfileCardDefault from './ProfileCardDefault';
import ProfileCardMobile from './ProfileCardMobile';

const profile = {
  skills: ['Guitar', 'Bass', 'Synthetizer'],
  _id: '5b887acdfc9af32e6fb21c7f',
  user: {
    firstname: 'Philippe',
    lastname: 'Matray',
    avatar: '//www.gravatar.com/avatar/d543deeff1deebd3706dbe5fd1f02f5b?s=200&r=pg&d=mm',
  },
  handle: 'philippe-matray',
  location: 'Liège, Belgium',
};

storiesOf('Profiles', module)
  .addDecorator(story => (
    <Router>
      <div style={{ margin: '1em' }}>{story()}</div>
    </Router>
  ))

  .add('profile default', () => (
    <Card>
      <ProfileCardDefault profile={profile} />
    </Card>
  ))

  .add('profile mobile', () => (
    <Card>
      <ProfileCardMobile profile={profile} />
    </Card>
  ));
