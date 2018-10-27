import React from 'react';
import PropTypes from 'prop-types';
import JoinUs from './message/JoinUs';
import FollowUs from './message/FollowUs';
import Whitepaper from './message/Whitepaper';

const Input = ({ as, ...rest }) => {
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

Input.propTypes = {
  as: PropTypes.oneOf(['join-us', 'follow-us', 'whitepaper']).isRequired,
};

Input.defaultProps = {
  as: 'join-us',
};

export default Input;
