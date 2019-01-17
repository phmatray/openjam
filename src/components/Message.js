// @flow

import React from 'react';

import JoinUs from './message/JoinUs';
import FollowUs from './message/FollowUs';
import Whitepaper from './message/Whitepaper';

type Props = {
  as?: 'join-us' | 'follow-us' | 'whitepaper',
};

const Input = ({ as, ...rest }: Props) => {
  switch (as) {
    case 'join-us':
      return <JoinUs {...rest} />;
    case 'follow-us':
      return <FollowUs {...rest} />;
    case 'whitepaper':
      return <Whitepaper {...rest} />;

    default:
      return null;
  }
};

Input.defaultProps = {
  as: 'join-us',
};

export default Input;
