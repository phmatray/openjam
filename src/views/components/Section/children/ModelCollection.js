// @flow

import * as React from 'react';

import Model from 'views/components/Model';
import type { ArtistBasic, TrackBasic } from 'lib/types';

type Entity = ArtistBasic | TrackBasic;

type Props = {
  itemRenderer: React.Node,
  models: Entity[],
};

const ModelCollection = ({ itemRenderer, models }: Props) => {
  const Item = itemRenderer;
  return models.map((item, idx) => <Item key={idx} item={item} />);
};

export default ModelCollection;
