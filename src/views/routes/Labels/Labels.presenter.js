// @flow

import React from 'react';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';

import Label from 'views/components/Label';
import Body from 'views/components/Body';
import { Flex } from 'views/elements';
import H2 from 'views/components/H2';
import type { LabelBasic } from 'lib/types';

type Props = {
  labels: LabelBasic[],
  t: any,
};

const LabelItems = ({ labels, t }: Props) => (
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

export default withNamespaces('common')(LabelItems);
