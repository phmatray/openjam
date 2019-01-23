// @flow

import React from 'react';

import type { AlbumBasic, PlaylistBasic, TrackBasic } from 'lib/types';

import HoverSpan from './link-play/HoverSpan';

type Props = {
  handleClick: () => void,
  entity: AlbumBasic | PlaylistBasic | TrackBasic,
  strong?: boolean,
};

const LinkPlay = ({ entity, strong, handleClick }: Props) => {
  // check entity
  if (entity === undefined || entity === null) {
    return <span />;
  }

  // get content
  let content = '';
  switch (entity.type) {
    case 'album':
    case 'playlist':
      content = entity.name;
      break;

    case 'track':
      content = entity.title;
      if (entity.type === 'track' && entity.edit) {
        content += ` (${entity.edit})`;
      }
      break;

    default:
      break;
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
