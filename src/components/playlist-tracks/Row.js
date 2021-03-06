import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TableRow } from 'semantic-ui-react';

import { Wrapper, Overlay } from './cover-toggle/Atoms';

const Row = styled(TableRow)`
  ${Wrapper} ${Overlay} {
    opacity: ${props => (props.active ? 1 : 0)};
  }

  &:hover ${Wrapper} ${Overlay} {
    opacity: 1;
  }
`;

Row.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default Row;
