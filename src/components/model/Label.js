// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import type { LabelBasic } from '../../types';

import Card from './label/Card';
import Content from './label/Content';
import Title from './label/Title';

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
