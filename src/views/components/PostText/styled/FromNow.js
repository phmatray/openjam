// @flow

import styled from 'styled-components';
import Moment from 'react-moment';

const FromNow = styled(Moment).attrs({ fromNow: true })`
  font-size: 0.9rem;
  color: #666;
`;

export default FromNow;
