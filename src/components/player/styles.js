import styled from 'styled-components';

export const PlayerStyled = styled.div`
  height: ${props => (props.height ? `${props.height}px` : '8em')};
  background-color: black;
  margin: 0;
  width: 100%;
`;

export const FlexFill = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 0;
`;

export const ColumnCover = styled.div`
  min-width: 90px;
  width: 90px;
  height: 90px;
  padding: 1px 0;
`;

export const ColumnTime = styled.div`
  margin: 1em;
  color: white;
  width: 10em;
  text-align: right;
`;

export const Cover = styled.img`
  width: 100%;
  height: 100%;
  margin: 0;
`;

export const ArtistName = styled.p`
  margin-top: 0.5em !important;
  font-size: 0.95rem;
  font-family: Ubuntu, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-weight: 300;
  color: #ccc;
`;
