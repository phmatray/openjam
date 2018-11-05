import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Wrapper, Overlay } from './cover-toggle/Atoms';

const ContentBlock = styled.div`
  display: flex;
  width: 100%;
  max-width: calc(340px + 0.9em);
  height: calc(55px);
  margin-right: 0.9em;

  ${Wrapper} ${Overlay} {
    opacity: ${props => (props.active ? 1 : 0)};
  }

  &:hover ${Wrapper} ${Overlay} {
    opacity: 1;
  }
`;

ContentBlock.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default ContentBlock;
