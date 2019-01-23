// @flow

import React from 'react';
import Moment from 'react-moment';

type Props = {
  releaseDate: string,
};

const Description = ({ releaseDate }: Props) => (
  <span>
    Release date:&nbsp;
    <Moment format="LL">{releaseDate}</Moment>
  </span>
);

export default Description;
