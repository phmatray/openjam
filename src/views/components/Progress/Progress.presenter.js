// @flow

import React from 'react';

import ProgressWrapper from './styled/ProgressWrapper';
import ProgressInner from './styled/ProgressInner';

type Props = {
  onClick: (position: number) => void,
  value: number,
};

const Progress = ({ onClick, value }: Props) => (
  <ProgressWrapper onClick={onClick}>
    <ProgressInner value={value} />
  </ProgressWrapper>
);

export default Progress;
