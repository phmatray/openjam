import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Body from '../../elements/UI/Body';

const LabelPresenter = ({ label }) => (
  <Body breadcrumbSegments={[<Link to="/labels">Labels</Link>, label.name]} />
);

LabelPresenter.propTypes = {
  label: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default LabelPresenter;
