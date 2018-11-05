import styled from 'styled-components';
import { Icon as SemanticIcon } from 'semantic-ui-react';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding: 0 !important;
  margin: 0.2em 0;
  width: 3em;
  height: 3em;
  border-radius: 5%;
  overflow: hidden;
`;

export const Cover = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 3em;
  height: 3em;
  background-color: #0006;
  opacity: 0;
  transition: 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Icon = styled(SemanticIcon)`
  width: 50px;
  height: 50px;
`;
