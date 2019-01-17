// @flow

import React from 'react';
import HoverSpan from './link-play/HoverSpan';

type Props = {
  handleClick: () => void,
  entity: {
    _id: string,
    title: string,
    edit?: string,
  },
  strong?: boolean,
};

const LinkPlay = ({ entity, strong, handleClick }: Props) => {
  // check entity
  if (entity === undefined || entity === null) {
    return <span />;
  }

  // get content
  let content = entity.title;
  if (entity.edit) {
    content += ` (${entity.edit})`;
  }

  // set strong if needed
  if (strong) {
    content = <strong>{content}</strong>;
  }

  return <HoverSpan onClick={handleClick}>{content}</HoverSpan>;
};

LinkPlay.defaultProps = {
  strong: false,
};

export default LinkPlay;
