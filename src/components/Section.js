import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button, Header, Segment } from 'semantic-ui-react';

import withTheme from '../hocs/withTheme';

import ModelCollection from './section/ModelCollection';
import Flex from './Flex';

const Scrollable = styled.div`
  overflow-x: scroll;
  padding-bottom: 16px;

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);
    border-radius: 0;
  }
`;

const Section = ({ title, items, to, maxHeight, scrollable, theme, t }) => (
  <Segment>
    <Flex row fluid alignCenter justifyBetween mb="1em">
      {title && (
        <Header as="h2" style={{ margin: '8px 0' }}>
          {title}
        </Header>
      )}
      {to && (
        <Button as={Link} to={to} basic size="small" color={theme.primarySemantic}>
          {t('pages.explore.show-all')}
        </Button>
      )}
    </Flex>

    {scrollable ? (
      <Scrollable>
        <Flex column wrapBreak contentStart style={{ maxHeight }}>
          <ModelCollection models={items} />
        </Flex>
      </Scrollable>
    ) : (
      <Flex wrapBreak justifyStart>
        <ModelCollection models={items} />
      </Flex>
    )}
  </Segment>
);

Section.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string,
  to: PropTypes.string,
  maxHeight: PropTypes.number,
  scrollable: PropTypes.bool,
};

Section.defaultProps = {
  title: null,
  to: null,
  maxHeight: 256,
  scrollable: true,
};

export default withTheme(withNamespaces('common')(Section));
