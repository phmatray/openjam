// @flow

import React from 'react';

import type { UserBasic } from '../types';

import Flex from './Flex';
import Div from './Div';
import Input from './Input';
import AvatarSmall from './post-item/styled/AvatarSmall';
import Button from './post-item/styled/Button';
import AddCommentForm from './post-item/styled/AddCommentForm';

type Props = {
  onChange: () => void,
  onSubmit: () => void,
  text: string,
  user: UserBasic,
  errors: any,
  theme: any,
};

const AddComment = ({ onChange, onSubmit, text, user, errors, theme }: Props) => (
  <Flex>
    <AvatarSmall src={user.profileImageUrl} />
    <AddCommentForm error noValidate onSubmit={onSubmit}>
      <Div mb="-1em">
        <Input
          as="text-area-field"
          placeholder={`Express yourself ${user.firstName}...`}
          name="text"
          value={text}
          onChange={onChange}
          error={errors.text}
        />
        <Button
          circular
          compact
          icon="send"
          color={theme.primarySemantic}
          content="Send"
          onClick={onSubmit}
        />
      </Div>
    </AddCommentForm>
  </Flex>
);

export default AddComment;
