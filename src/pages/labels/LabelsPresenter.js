import React from 'react';
import PropTypes from 'prop-types';
import Label from '../../components/model/Label';
import Body from '../../components/Body';
import Flex from '../../components/Flex';
import H2 from '../../components/H2';

const LabelItems = ({ labels }) => (
  <Body breadcrumbSegments={['Labels']} description="Pick some music by label.">
    <H2 header="What's new" />
    <Flex wrap justifyStart>
      {labels.map(label => (
        <Label key={label._id} label={label} />
      ))}
    </Flex>
  </Body>
);

LabelItems.propTypes = {
  labels: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default LabelItems;
