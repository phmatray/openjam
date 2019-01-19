// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import TableLink from './link-entity/TableLink';
import InvertedLink from './link-entity/InvertedLink';
import Alternate from './link-entity/Alternate';
import AlternateEdit from './link-entity/AlternateEdit';

type Entity = {
  _id: string,
  type: 'album' | 'artist' | 'label' | 'playlist' | 'track',
  name?: string,
  title?: string,
  edit?: string,
};

type Props = {
  entity: Entity,
  as: 'link' | 'table' | 'inverted',
  strong: boolean,
  alternate: boolean,
};

const LinkEntity = ({ entity, as, strong, alternate }: Props) => {
  // check entity
  if (entity === undefined || entity === null) {
    return <span />;
  }

  // get route
  const href = `/${entity.type}/${entity._id}`;

  // get content
  let content;
  // set alternate if needed
  if (alternate) {
    content = (
      <Alternate>
        {entity.title ? entity.title : entity.name}
        {entity.title && entity.edit && <AlternateEdit>{` (${entity.edit})`}</AlternateEdit>}
      </Alternate>
    );
  } else if (entity.title) {
    content = entity.title;
    if (entity.edit) {
      content += ` (${entity.edit})`;
    }
  } else {
    content = entity.name;
  }

  // set strong if needed
  if (strong) {
    content = <strong>{content}</strong>;
  }

  // return the right component
  switch (as) {
    case 'table':
      return <TableLink to={href}>{content}</TableLink>;

    case 'inverted':
      return <InvertedLink to={href}>{content}</InvertedLink>;

    case 'link':
    default:
      return <Link to={href}>{content}</Link>;
  }
};

LinkEntity.defaultProps = {
  as: 'link',
  strong: false,
  alternate: false,
};

export default LinkEntity;
