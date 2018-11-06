import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button, Divider } from 'semantic-ui-react';

import ModelCollection from './section/ModelCollection';
import Flex from '../../components/Flex';
import H2 from '../../components/H2';

const Scrollable = styled.div`
  overflow-x: scroll;
  padding-bottom: 16px;

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);
    border-radius: 0;
  }
`;

const Section = ({ title, items, to, maxHeight, t }) => (
  <Flex column fluid>
    <Flex row fluid alignCenter justifyBetween mb="1em">
      <H2 header={title} />
      <Button as={Link} to={to} basic color="teal">
        {t('pages.explore.show-all')}
      </Button>
    </Flex>
    <Scrollable>
      <Flex column wrapBreak contentStart style={{ maxHeight }}>
        <ModelCollection models={items} />
      </Flex>
    </Scrollable>
    <Divider />
  </Flex>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  to: PropTypes.string.isRequired,
  maxHeight: PropTypes.number,
};

Section.defaultProps = {
  maxHeight: 256,
};

export default withNamespaces('common')(Section);
