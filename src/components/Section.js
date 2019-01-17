// @flow

import React from 'react';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button, Header, Segment } from 'semantic-ui-react';

import withTheme from '../hocs/withTheme';

import ModelCollection from './section/ModelCollection';
import Flex from './Flex';
import Scrollable from './section/Scrollable';

type Props = {
  items: [],
  title?: string,
  to?: string,
  maxHeight?: number,
  scrollable?: boolean,
  theme: any,
  t: any,
};

const Section = ({ title, items, to, maxHeight, scrollable, theme, t }: Props) => (
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

Section.defaultProps = {
  title: null,
  to: null,
  maxHeight: 256,
  scrollable: true,
};

export default withTheme(withNamespaces('common')(Section));
