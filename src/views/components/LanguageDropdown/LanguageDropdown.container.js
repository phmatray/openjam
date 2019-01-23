// @flow

import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';
import { Dropdown } from 'semantic-ui-react';

import { updateLanguage } from 'store/modules/ui/layout';

const StyledDropdown = styled(Dropdown)`
  & i.icon {
    margin: 0 !important;
  }
`;

type Props = {
  updateLanguage: (value: string) => void,
  i18n: any,
};

const LanguageDropdown = ({ updateLanguage, i18n }: Props) => {
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

export default connect(
  null,
  { updateLanguage },
)(withNamespaces('common')(LanguageDropdown));
