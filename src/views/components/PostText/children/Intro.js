// @flow

import React from 'react';
import { Link } from 'react-router-dom';

// import { Span } from 'views/elements';
import { Flex } from 'views/elements';
import type { PostBasic } from 'lib/types';

import Avatar from '../styled/Avatar';
import FromNow from '../styled/FromNow';

type Props = {
  post: PostBasic,
};

const Intro = ({ post }: Props) => {
  const { handle } = post;
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

export default Intro;
