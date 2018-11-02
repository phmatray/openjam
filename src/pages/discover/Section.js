import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button, Divider } from 'semantic-ui-react';

import Content from './section/Content';
import SubContent from './section/SubContent';
import ModelCollection from './section/ModelCollection';
import Div from '../../components/Div';
import Flex from '../../components/Flex';
import H2 from '../../components/H2';

const Section = ({ title, items, to, t }) => (
  <Flex column fluid>
    <Flex row fluid alignCenter justifyBetween mb="1em">
      <H2 header={title} />
      <Button as={Link} to={to} basic color="teal">
        {t('pages.discover.show-all')}
      </Button>
    </Flex>
    <Content>
      <SubContent>
        <ModelCollection models={items} />
      </SubContent>
    </Content>
    <Div mt="2em">
      <Divider />
    </Div>
  </Flex>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  to: PropTypes.string.isRequired,
};

export default withNamespaces('common')(Section);
