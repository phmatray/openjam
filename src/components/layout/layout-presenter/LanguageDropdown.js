import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';
import { Dropdown } from 'semantic-ui-react';

import { updateLanguage } from '../../../redux/modules/layout';

const StyledDropdown = styled(Dropdown)`
  & i.icon {
    margin: 0 !important;
  }
`;

const LanguageDropdown = ({ updateLanguage, i18n }) => {
  const languages = [
    {
      text: 'English',
      flag: 'united kingdom',
      value: 'en',
    },
    {
      text: 'Français',
      flag: 'france',
      value: 'fr',
    },
  ];

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <StyledDropdown
      item
      options={languages}
      icon="world"
      text=" "
      onChange={(e, { value }) => {
        updateLanguage(value);
        changeLanguage(value);
      }}
    />
  );
};

LanguageDropdown.propTypes = {
  updateLanguage: PropTypes.func.isRequired,
};

export default connect(
  null,
  { updateLanguage },
)(withNamespaces('common')(LanguageDropdown));
