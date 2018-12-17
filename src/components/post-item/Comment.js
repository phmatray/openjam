import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AvatarSmall, CommentText, FromNow, CommentContainer } from './styles';
import Flex from '../Flex';
import Div from '../Div';

const Comment = ({ comment }) => {
  const { avatar, firstname, lastname, handle, text, date } = comment;
  const fullName = `${firstname} ${lastname}`;

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

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default Comment;
