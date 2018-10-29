import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  overflow: hidden;
  height: ${props => props.height};
  position: relative;
  width: 100%;

  backface-visibility: hidden;
  will-change: overflow;

  background-color: #f8f8f8;
`;

export default Container;
