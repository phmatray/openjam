import styled from 'styled-components';
import { Link } from 'react-router-dom';
import RcSlider from 'rc-slider';

export const PlayerStyled = styled.div`
  height: ${props => (props.height ? props.height : '8em')};
  background-color: black;
  margin: 0;
`;

export const FlexFill = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 0;
`;

export const ColumnCover = styled.div`
  width: 8em;
  height: 8em;
  padding: 0;
`;

export const ColumnInfo = styled.div`
  width: 16em;
  margin-left: 0.5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ColumnTimeLeft = styled.div`
  margin: 1em;
  color: white;
  width: 5em;
  text-align: right;
`;

export const ColumnControls = styled.div`
  width: 30em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ColumnTimeRight = styled.div`
  margin: 1em;
  color: white;
  width: 5em;
  text-align: left;
`;

export const Cover = styled.img`
  width: 7.4em;
  height: 7.4em;
  border: 0.1em solid white;
  margin: 0.2em;
`;

export const PlayerLink = styled(Link)`
  color: #fff;
  transition: color 100ms ease-in-out;

  &:hover {
    color: #00b5ad;
  }
`;

export const TrackName = styled.h5`
  margin-top: 1em !important;
  margin-bottom: 0em;
  font-family: Comfortaa, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-weight: 400;
`;

export const Edit = styled.p`
  margin-top: 0.2em !important;
  font-family: Comfortaa, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-size: 0.8em;
  font-style: italic;
  font-weight: 400;
`;

export const ArtistName = styled.h5`
  margin-top: 1em !important;
  font-family: Ubuntu, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-weight: 300;
  color: #ddd;
`;

export const Slider = styled(RcSlider)`
  margin-top: 1.1em;
`;

export const ButtonCollection = styled.div`
  margin-top: 1em;
`;
