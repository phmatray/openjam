import styled from 'styled-components';

export const ProgressStyled = styled.div`
  height: 20px;
  width: 100%;
  overflow: hidden;
  cursor: pointer;
  background-color: #fff3;
`;

export const ProgressInner = styled.div`
  width: ${props => (props.value ? `${props.value}%` : 0)};
  height: 100%;
  border-top: 1px solid black;
  background-color: #00b5ad;
  transition: width 0.2s ease-in;
`;
