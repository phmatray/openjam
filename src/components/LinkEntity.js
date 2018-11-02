import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TableLink from './link-entity/TableLink';
import InvertedLink from './link-entity/InvertedLink';
import Alternate from './link-entity/Alternate';
import AlternateEdit from './link-entity/AlternateEdit';

const LinkEntity = ({ entity, as, strong, alternate }) => {
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

LinkEntity.propTypes = {
  entity: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['album', 'artist', 'label', 'playlist', 'track']).isRequired,
    name: PropTypes.string,
    title: PropTypes.string,
    edit: PropTypes.string,
  }).isRequired,
  as: PropTypes.oneOf(['link', 'table', 'inverted']),
  strong: PropTypes.bool,
  alternate: PropTypes.bool,
};

LinkEntity.defaultProps = {
  as: 'link',
  strong: false,
  alternate: false,
};

export default LinkEntity;
