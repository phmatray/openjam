// @flow
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';

type Props = {
  onClick: () => void,
  type2: string,
  title: string,
};

const Track = ({ onClick, type2, title }: Props) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: type2 === 'original' ? 'underline' : 'none',
    }}
  >
    {title}
  </li>
);

export default Track;
