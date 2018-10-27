import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getBrandColor, getBrandIconName } from '../utils/brandHelpers';
import logoWhite from '../images/logos/logo_white.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Span = styled.span`
  background-color: ${props => props.color};
  width: 3em;
  height: 3em;
  color: white;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 10em;
  border: 0 solid ${props => props.color};
  transition: border 0.2s ease-in-out;

  &:hover {
    border: 0.3em solid #fff6;
    color: white;
  }
`;

const Icon = ({ name }) => (
  <Span color={getBrandColor(name)}>
    {name === 'openjam' ? (
      <img src={logoWhite} style={{ height: '24px' }} alt="" />
    ) : (
      <FontAwesomeIcon
        icon={getBrandIconName(name)}
        style={{ margin: 0, height: 'initial', fontSize: '20px' }}
      />
    )}
  </Span>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
