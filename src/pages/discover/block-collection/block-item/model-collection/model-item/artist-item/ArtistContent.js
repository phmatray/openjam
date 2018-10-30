import styled from 'styled-components';

const ArtistContent = styled.div`
  display: flex;
  min-height: 20vh;
  width: 350px;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;

  &:hover {
    background-color: rgba(0, 0, 0, 0.51);
  }
`;

export default ArtistContent;
