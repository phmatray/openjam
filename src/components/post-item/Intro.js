import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Avatar, FromNow } from './styles';
import Span from '../Span';
import Flex from '../Flex';

const Intro = ({ post }) => {
  const { firstname, lastname, handle, avatar, date } = post;
  const {
    byUser: { firstName, lastName, profileImageUrl },
    createdAt,
  } = post;
  const fullName = `${firstName} ${lastName}`;

  return (
    <Flex alignCenter justifyBetween fluid>
      <Link to={`/profiles/${handle}`}>
        <Flex alignCenter>
          <Avatar src={profileImageUrl} alt={fullName} />
          <Flex column>
            <strong style={{ fontWeight: 700 }}>{fullName}</strong>
            {/* <Span color="#666">{`@${handle}`}</Span> */}
          </Flex>
        </Flex>
      </Link>

      <div>
        <FromNow>{createdAt}</FromNow>
      </div>
    </Flex>
  );
};

Intro.propTypes = {
  post: PropTypes.shape({
    byUser: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      profileImageUrl: PropTypes.string.isRequired,
    }).isRequired,
    createdAt: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired,
  }).isRequired,
};

export default Intro;
