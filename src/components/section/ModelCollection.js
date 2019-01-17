// @flow

import React from 'react';

import Model from '../Model';

type Props = {
  models: [],
};

const ModelCollection = ({ models }: Props) =>
  models.map((item, idx) => <Model key={idx} model={item} />);

export default ModelCollection;
