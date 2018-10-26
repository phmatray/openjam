import styled from 'styled-components';

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  font-size: 1rem;
  position: relative;
  z-index: 10;
  height: 56px;
`;

export const Container = styled.div`
  display: flex;
  overflow: hidden;
  height: ${props => props.height};
  position: relative;
  width: 100%;

  backface-visibility: hidden;
  will-change: overflow;

  background-color: #f8f8f8;
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  font-size: 1rem;
  position: relative;
  z-index: 10;
  height: 90px;
`;

export const Section = styled.div`
  overflow: auto;
  height: auto;
  padding: 0.5rem;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Left = styled(Section)`
  width: 12.5rem;
  background-color: indigo;
`;

export const Middle = styled(Section)`
  flex: 1;
`;

export const Right = styled(Section)`
  width: 12.5rem;
  background-color: violet;
`;
