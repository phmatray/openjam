import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const HeroContainer = styled.div`
  height: 256px;

  ${props =>
    props.src !== null
      ? css`
          background: url(${props => props.src}) no-repeat center center fixed;
          background-size: cover;
        `
      : css`
          background-color: black;
        `};
`;

HeroContainer.propTypes = {
  src: PropTypes.string.isRequired,
};

export default HeroContainer;
