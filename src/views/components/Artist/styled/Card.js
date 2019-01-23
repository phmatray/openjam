// @flow

import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  min-height: 20vh;
  max-width: 350px;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.primary} url(${props => props.imagesrc}) no-repeat center
    center;
  background-size: cover;
  position: relative;
  z-index: 1;
  margin-right: 1em;
  margin-bottom: 1em;

  @media (max-width: 400px) {
    width: 300px;
  }
`;

export default Card;
