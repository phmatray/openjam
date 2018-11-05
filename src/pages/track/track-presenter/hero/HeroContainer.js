import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeroContainer = styled.div`
  height: 256px;
  background: url(${props => props.src}) no-repeat center center fixed;
  background-size: cover;
`;

HeroContainer.propTypes = {
  src: PropTypes.string.isRequired,
};

export default HeroContainer;
