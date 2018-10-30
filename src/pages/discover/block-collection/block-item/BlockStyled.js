import styled from 'styled-components';

const BlockStyled = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  color: black;
  border-radius: 9px;
  padding: 1em;
  margin-bottom: 1em;

  @media (max-width: 1440px) {
    width: 100%;
  }
`;

export default BlockStyled;
