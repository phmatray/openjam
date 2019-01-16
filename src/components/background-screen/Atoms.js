import styled from 'styled-components';
import loginBackground from '../../assets/images/backgrounds/login-background.jpg';

export const FullHeightContainer = styled.div`
  display: table;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;

export const BackgroundOverlay = styled.div`
  background: #000;
  background-image: ${`url(${loginBackground})`};
  background-position: 50%;
  background-size: cover;
  display: table-cell;
  vertical-align: middle;

  &:before {
    background-color: rgba(0, 0, 0, 0.65);
    bottom: 0;
    content: '';
    display: block;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`;
