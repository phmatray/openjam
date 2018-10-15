import React from 'react';
import styled from 'styled-components';
import { Header, Icon } from 'semantic-ui-react';

const HeaderStyled = styled(Header).attrs({
  as: 'h2',
  textAlign: 'center',
})`
  margin-top: 1.5em !important;
`;

const PageHeader = () => {
  return (
    <HeaderStyled icon>
      <Icon name="users" circular />
      <Header.Content>Share on OpenJam</Header.Content>
    </HeaderStyled>
  );
};

export default PageHeader;
