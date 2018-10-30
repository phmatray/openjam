import styled from 'styled-components';

const ArtistSheet = styled.div`
  display: flex;
  min-height: 20vh;
  max-width: 350px;
  align-items: center;
  justify-content: center;
  background-image: url(${props => props.imagesrc});
  background-repeat: no-repeat;
  background: cover;
  position: relative;
  z-index: 1;
  margin: 0.5em;

  @media (max-width: 400px) {
    width: 300px;
  }
`;

export default ArtistSheet;
