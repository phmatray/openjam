import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TableLink } from './style';

const LinkEntity = ({ entity, as, strong }) => {
  // check entity
  if (entity === undefined || entity === null) {
    return <span />;
  }

  // get route
  const href = `/${entity.type}/${entity._id}`;

  // get content
  let content;
  if (entity.title) {
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
  as: PropTypes.oneOf(['link', 'table']),
  strong: PropTypes.bool,
};

LinkEntity.defaultProps = {
  type: 'link',
  strong: false,
};

export default LinkEntity;
