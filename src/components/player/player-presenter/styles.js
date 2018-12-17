import styled from 'styled-components';

export const ProgressStyled = styled.div`
  height: 12px;
  width: 100%;
  overflow: hidden;
  cursor: pointer;
  background-color: #fff3;
  margin-top: 1px;
  margin-left: 1px;
  margin-right: 1px;
`;

export const ProgressInner = styled.div`
  width: ${props => (props.value ? `${props.value}%` : 0)};
  height: 100%;
  background-color: ${props => props.theme.primary};
  transition: width 0.2s ease-in;
`;
