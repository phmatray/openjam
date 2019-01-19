// @flow

import React from 'react';

import Model from '../Model';
import type { ArtistBasic, TrackBasic } from '../../types';

type Entity = ArtistBasic | TrackBasic;

type Props = {
  models: Entity[],
};

const ModelCollection = ({ models }: Props) =>
  models.map((item, idx) => <Model key={idx} model={item} />);

export default ModelCollection;
