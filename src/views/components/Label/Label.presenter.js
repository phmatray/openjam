// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import type { LabelBasic } from 'lib/types';

import Card from './styled/Card';
import Content from './styled/Content';
import Title from './styled/Title';

type Props = {
  label: LabelBasic,
};

const Label = ({ label }: Props) => (
  <Link to={`/label/${label._id}`}>
    <Card imagesrc={label.imagesrc}>
      <Content>
        <Title>{label.name}</Title>
      </Content>
    </Card>
  </Link>
);

export default Label;
