import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import LabelItem from './children/LabelItem';

const LabelItems = ({ labels, loading }) =>
  labels === null || loading ? (
    <Spinner />
  ) : labels.length > 0 ? (
    labels.map(label => <LabelItem key={label._id} label={label} />)
  ) : (
    <h4>No labels found...</h4>
  );

LabelItems.propTypes = {
  labels: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default LabelItems;
