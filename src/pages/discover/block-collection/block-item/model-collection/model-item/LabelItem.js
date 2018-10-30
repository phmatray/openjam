import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BlockLabel from './label-item/BlockLabel';
import ImgLabel from './label-item/ImgLabel';

class LabelItem extends Component {
  render() {
    const { label } = this.props;
    return (
      <BlockLabel>
        <h3 style={{ textAlign: 'center' }}>{label.labelname}</h3>
        <ImgLabel src={label.imagesrc} alt={label.labelname} />
      </BlockLabel>
    );
  }
}

LabelItem.propTypes = {
  label: PropTypes.shape({
    labelname: PropTypes.string.isRequired,
    imagesrc: PropTypes.string.isRequired,
  }).isRequired,
};

export default LabelItem;
