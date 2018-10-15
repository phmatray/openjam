import styled from 'styled-components';
import PropTypes from 'prop-types';

const Div = styled.div`
  margin-top: ${props => props.mt} !important;
  margin-right: ${props => props.mr} !important;
  margin-bottom: ${props => props.mb} !important;
  margin-left: ${props => props.ml} !important;

  padding-top: ${props => props.pt} !important;
  padding-right: ${props => props.pr} !important;
  padding-bottom: ${props => props.pb} !important;
  padding-left: ${props => props.pl} !important;
`;

Div.propTypes = {
  mt: PropTypes.string,
  mr: PropTypes.string,
  mb: PropTypes.string,
  ml: PropTypes.string,

  pt: PropTypes.string,
  pr: PropTypes.string,
  pb: PropTypes.string,
  pl: PropTypes.string,
};

Div.defaultProps = {
  mt: 'initial',
  mr: 'initial',
  mb: 'initial',
  ml: 'initial',

  pt: 'initial',
  pr: 'initial',
  pb: 'initial',
  pl: 'initial',
};

export default Div;
