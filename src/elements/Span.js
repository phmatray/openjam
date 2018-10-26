import styled from 'styled-components';
import PropTypes from 'prop-types';

const Span = styled.span`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};

  margin-top: ${props => props.mt} !important;
  margin-right: ${props => props.mr} !important;
  margin-bottom: ${props => props.mb} !important;
  margin-left: ${props => props.ml} !important;

  padding-top: ${props => props.pt} !important;
  padding-right: ${props => props.pr} !important;
  padding-bottom: ${props => props.pb} !important;
  padding-left: ${props => props.pl} !important;
`;

Span.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,

  mt: PropTypes.string,
  mr: PropTypes.string,
  mb: PropTypes.string,
  ml: PropTypes.string,

  pt: PropTypes.string,
  pr: PropTypes.string,
  pb: PropTypes.string,
  pl: PropTypes.string,
};

Span.defaultProps = {
  color: 'inherit',
  fontSize: '1rem',

  mt: 'initial',
  mr: 'initial',
  mb: 'initial',
  ml: 'initial',

  pt: 'initial',
  pr: 'initial',
  pb: 'initial',
  pl: 'initial',
};

export default Span;
