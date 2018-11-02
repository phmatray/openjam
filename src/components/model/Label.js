import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from './label/Card';
import Content from './label/Content';
import Title from './label/Title';

const Label = ({ label }) => (
  <Link to={`/label/${label._id}`}>
    <Card imagesrc={label.imagesrc}>
      <Content>
        <Title>{label.name}</Title>
      </Content>
    </Card>
  </Link>
);

Label.propTypes = {
  label: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imagesrc: PropTypes.string,
  }).isRequired,
};

export default Label;
