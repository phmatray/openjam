import styled from 'styled-components';

const ContentArtist = styled.div`
  display: flex;
  justify-content: center;

  div:nth-child(1) {
    max-height: calc(2 * (23vh + 0.9em));
    padding: 0;
    max-width: calc(3 * (830px + 0.5em));
    overflow-x: auto;
  }
`;

export default ContentArtist;
