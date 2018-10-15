import styled from 'styled-components';
import PropTypes from 'prop-types';

const Span = styled.span`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
`;

Span.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
};

Span.defaultProps = {
  color: 'inherit',
  fontSize: '1rem',
};

export default Span;
