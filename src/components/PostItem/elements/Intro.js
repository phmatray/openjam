import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Avatar, FromNow } from '../children/styles';
import Span from '../../../elements/Span';
import Flex from '../../../elements/Flex';

const Intro = ({ post }) => {
  const { firstname, lastname, handle, avatar, date } = post;
  const fullName = `${firstname} ${lastname}`;

  return (
    <Flex alignCenter justifyBetween fluid>
      <Link to={`/profile/${handle}`}>
        <Flex alignCenter>
          <Avatar src={avatar} alt={fullName} />
          <Flex column>
            <strong style={{ fontWeight: 700 }}>{fullName}</strong>
            <Span color="#666">@{handle}</Span>
          </Flex>
        </Flex>
      </Link>

      <div>
        <FromNow>{date}</FromNow>
      </div>
    </Flex>
  );
};

Intro.propTypes = {
  post: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default Intro;
