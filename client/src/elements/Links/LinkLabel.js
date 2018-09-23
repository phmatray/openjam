import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkLabel = ({ label }) => <Link to={`/label/${label._id}`}>{label.name}</Link>;

LinkLabel.propTypes = {
  label: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default LinkLabel;
