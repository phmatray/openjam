import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';

import Body from '../../components/Body';

const LabelPresenter = ({ label, t }) => (
  <Body breadcrumbSegments={[<Link to="/labels">{t('pages.label.labels')}</Link>, label.name]} />
);

LabelPresenter.propTypes = {
  label: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default withNamespaces('common')(LabelPresenter);
