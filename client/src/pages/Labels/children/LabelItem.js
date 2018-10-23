import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';

const LabelItem = ({ label, color }) => {
  return (
    <Card color={color}>
      <Card.Content>
        <Card.Header>
          <Link to={`/label/${label._id}`}>{label.name}</Link>
        </Card.Header>
      </Card.Content>
    </Card>
  );
};

LabelItem.propTypes = {
  label: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  color: PropTypes.string,
};

LabelItem.defaultProps = {
  color: 'teal',
};

export default LabelItem;
