import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';

import Label from '../../components/model/Label';
import Body from '../../components/Body';
import Flex from '../../components/Flex';
import H2 from '../../components/H2';

const LabelItems = ({ labels, t }) => (
  <Body
    breadcrumbSegments={[
      <Link to="/explore">{t('pages.explore.header')}</Link>,
      t('pages.labels.header'),
    ]}
    description={t('pages.labels.subheader')}
  >
    <H2 header={t('pages.labels.new')} />
    <Flex wrapBreak justifyStart>
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

export default withNamespaces('common')(LabelItems);
