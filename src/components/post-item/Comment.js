// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import Flex from '../Flex';
import Div from '../Div';

import { AvatarSmall, CommentText, FromNow, CommentContainer } from './styles';

type Props = {
  comment: {
    avatar: string,
    firstName: string,
    lastName: string,
    text: string,
    date: string,
  },
};

const Comment = ({ comment }: Props) => {
  const { avatar, firstName, lastName, handle, text, date } = comment;
  const fullName = `${firstName} ${lastName}`;

  return (
    <Div pt="0.5em" pb="0.5em">
      <Flex>
        <AvatarSmall src={avatar} alt={fullName} />

        <div>
          <CommentContainer>
            <Link to={`/profiles/${handle}`}>
              <strong>
                {/* TODO: add handle */}
                {/* <a href="true"> */}
                {fullName}
                {/* </a> */}
              </strong>
            </Link>
            <CommentText>{text}</CommentText>
          </CommentContainer>
          <Div ml="17px" mt="0">
            <FromNow date={date} />
          </Div>
        </div>
      </Flex>
    </Div>
  );
};

export default Comment;
