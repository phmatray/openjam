import styled from 'styled-components';

const Overlay = styled.div`
  position: absolute;
  width: 3em;
  height: 3em;
  background-color: #0006;
  opacity: 0;
  transition: 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default Overlay;
