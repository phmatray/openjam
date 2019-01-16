import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';

export const GridContent = styled(Grid).attrs({
  textAlign: 'center',
  verticalAlign: 'middle',
  columns: 'equal',
})`
  height: 100%;
  max-width: 1040;
  margin-left: auto;
  margin-right: auto;
  color: #fff;
`;

export const Features = styled.div`
  padding: 45px;
  position: relative;
  width: 630px;
  display: table-cell;
  vertical-align: middle;
  text-align: left;
`;

export const H1 = styled.h1`
  font-family: 'Ubuntu';
  color: ${props => props.theme.primary};
  font-size: 52px;
  font-weight: 700;
  line-height: 56px;
  margin: 0.67em 0;
  margin-top: 19px;
  margin-bottom: 9.5px;
`;

export const H3 = styled.h3`
  font-family: 'Ubuntu';
  margin-bottom: 35px;
  line-height: 1.2em;
  font-weight: 100;
  font-size: 24px;
  margin-top: 19px;
`;

export const Ul = styled.ul`
  padding: 0;
  margin-top: 0;
  margin-bottom: 9.5px;
`;

export const Li = styled.li`
  font-family: 'Ubuntu';
  font-size: 1.25em;
  margin: 0 0 0 1.1em;
  padding: 0.225em 0 0.625em 0;
  vertical-align: middle;
  display: list-item;
  text-align: -webkit-match-parent;
`;
