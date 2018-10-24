import React from 'react';
import PropTypes from 'prop-types';
import { HoverSpan } from './styles';

const LinkPlay = ({ entity, strong, handleClick }) => {
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

LinkPlay.propTypes = {
  handleClick: PropTypes.func.isRequired,
  entity: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    edit: PropTypes.string,
  }).isRequired,
  strong: PropTypes.bool,
};

LinkPlay.defaultProps = {
  strong: false,
};

export default LinkPlay;
